import * as htmlToImage from 'html-to-image'
import styles from '../styles/scrollmeter.module.scss'
import { IScrollmeter, ScrollmeterOptions } from '../types/scrollmeter.types'
import { ScrollmeterTimeline } from './scrollmeter-timeline'

export class Scrollmeter extends IScrollmeter {
    #defaultOptions: ScrollmeterOptions
    #targetContainer: HTMLElement | null
    #scrollmeterContainer: HTMLDivElement | null
    #scrollmeterBar: HTMLDivElement | null
    #resizeObserver: ResizeObserver | null

    #timelineElements: ScrollmeterTimeline | null

    #captureCanvas: HTMLCanvasElement | null

    #containerHeight: number
    #barWidth: number
    #totalHeight: number
    #elementTop: number
    #highestZIndex: number

    #isInView: boolean

    constructor(options: ScrollmeterOptions) {
        super()
        const { targetId } = options
        this.#defaultOptions = options

        this.#targetContainer = document.getElementById(targetId) ?? null
        this.#scrollmeterContainer = null
        this.#scrollmeterBar = null
        this.#resizeObserver = null
        this.#captureCanvas = null
        this.#timelineElements = null

        // 숫자 필드 초기화
        this.#containerHeight = 0
        this.#barWidth = 0
        this.#totalHeight = 0
        this.#elementTop = 0
        this.#highestZIndex = 0

        this.#isInView = false

        this.#initResizeObserver()

        this.#createScrollmeter()
    }

    #initResizeObserver = () => {
        if (!this.#targetContainer) {
            throw new Error('targetContainer is not found')
        }

        this.#resizeObserver = new ResizeObserver(async (entries) => {
            if (!this.#targetContainer) return

            if (!this.#scrollmeterContainer || this.#containerHeight === entries[0].contentRect.height) return

            this.#containerHeight = entries[0].contentRect.height

            const marginTop = parseInt(window.getComputedStyle(this.#targetContainer).marginTop)
            const marginBottom = parseInt(window.getComputedStyle(this.#targetContainer).marginBottom)
            this.#elementTop = window.scrollY + this.#targetContainer.getBoundingClientRect().top
            this.#totalHeight = this.#targetContainer.clientHeight + marginTop + marginBottom - document.documentElement.clientHeight

            this.#updateBarWidth()

            if (this.#defaultOptions.useTimeline) {
                document.querySelectorAll(`.${styles.scrollmeter_timeline}`).forEach((element) => {
                    element.remove()
                })

                if (this.#defaultOptions.usePreview) {
                    await this.#captureContainer()
                }

                const timeline = new ScrollmeterTimeline(this)

                this.#timelineElements = timeline.createTimeline(this.#highestZIndex)
            }
        })
    }

    #createScrollmeterContainer = () => {
        try {
            if (!this.#targetContainer) throw new Error('targetContainer is not found')

            const scrollmeterContainer = document.createElement('div') as HTMLDivElement
            scrollmeterContainer.classList.add(styles.scrollmeter_container)

            const highestZIndex = this.#findHighestZIndex(this.#targetContainer)
            this.#highestZIndex = highestZIndex
            scrollmeterContainer.style.zIndex = highestZIndex.toString()

            const scrollmeterBar = this.#createScrollmeterBar()
            scrollmeterContainer.appendChild(scrollmeterBar)

            this.#scrollmeterContainer = scrollmeterContainer

            this.setCSSCustomProperties()

            return scrollmeterContainer
        } catch (error) {
            console.error(error)
        }
    }

    #createScrollmeterBar = () => {
        const scrollmeterBar = document.createElement('div')
        scrollmeterBar.classList.add(styles.scrollmeter_bar)

        this.#scrollmeterBar = scrollmeterBar

        return scrollmeterBar
    }

    #findHighestZIndex = (element: HTMLElement) => {
        let highest = 0

        const zIndex = window.getComputedStyle(element).zIndex

        if (zIndex !== 'auto') {
            highest = Math.max(highest, parseInt(zIndex))
        }

        Array.from(element.children).forEach((child) => {
            highest = Math.max(highest, this.#findHighestZIndex(child as HTMLElement))
        })

        return highest + 1
    }

    #updateBarWidth = () => {
        if (!this.#targetContainer) return
        if (!this.#isInView) return

        const isVisibleScrollmeter = this.#isVisibleScrollmeter()

        if (!isVisibleScrollmeter) {
            this.#scrollmeterContainer!.style.opacity = '0'
            return
        }

        this.#scrollmeterContainer!.style.opacity = '1'

        const currentScroll = window.scrollY - this.#elementTop
        const scrollPercentage = (currentScroll / this.#totalHeight) * 100

        this.#barWidth = Math.min(100, Math.max(0, scrollPercentage))

        if (this.#scrollmeterBar) {
            this.#scrollmeterBar.style.width = `${this.#barWidth}%`
        }
    }

    #throttle = (func: Function, limit: number) => {
        let inThrottle: boolean = false

        return () => {
            if (!inThrottle) {
                func.apply(this)
                inThrottle = true
                setTimeout(() => {
                    inThrottle = false
                }, limit)
            }
        }
    }

    #throttledUpdateBarWidth = this.#throttle(this.#updateBarWidth, 16)

    #isVisibleScrollmeter = () => {
        if (!this.#targetContainer) return false

        return this.#targetContainer.getBoundingClientRect().top <= 0 && this.#targetContainer.getBoundingClientRect().bottom > 0
    }

    #captureContainer = async () => {
        if (!this.#targetContainer) return

        try {
            // 전체 문서 크기 계산
            const docWidth = Math.max(
                document.documentElement.scrollWidth,
                document.documentElement.offsetWidth,
                document.documentElement.clientWidth
            )
            const docHeight = Math.max(
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight,
                document.documentElement.clientHeight
            )

            // DOM 업데이트를 위한 대기
            await new Promise((resolve) => setTimeout(resolve, 100))

            const canvas = await htmlToImage.toCanvas(document.documentElement, {
                width: docWidth,
                height: docHeight,
                filter: (node) => {
                    return !(node instanceof HTMLElement && node.classList?.contains(styles.scrollmeter_container))
                },
                backgroundColor: getComputedStyle(document.body).backgroundColor || '#ffffff',
            })

            this.#captureCanvas = canvas

            return canvas
        } catch (error) {
            console.error('미리보기 생성 중 오류 발생:', error)
            return null
        }
    }

    #createScrollmeter = () => {
        try {
            if (!this.#targetContainer) throw new Error('targetContainer is not found')

            const existingScrollmeter = document.querySelectorAll(`.${styles.scrollmeter_container}`)

            if (existingScrollmeter.length > 0) {
                return null
            }

            if (!this.#resizeObserver) {
                throw new Error('resizeObserver is not found')
            }

            const container = this.#createScrollmeterContainer()

            if (!container) throw new Error('scrollmetercontainer is not found')

            this.#targetContainer.appendChild(container)

            this.#resizeObserver.observe(this.#targetContainer)

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.#isInView = true
                        this.#updateBarWidth()
                    } else {
                        this.#isInView = false
                    }
                })
            })

            observer.observe(this.#targetContainer)

            window.addEventListener('scroll', this.#throttledUpdateBarWidth)
        } catch (error) {
            console.error(error)
        }
    }

    protected setCSSCustomProperties = () => {
        if (!this.#scrollmeterContainer) return
        // css custom
        if (this.#defaultOptions.barOptions) {
            const { color, background, height } = this.#defaultOptions.barOptions
            if (color) {
                this.#scrollmeterContainer.style.setProperty('--scrollmeter-bar-color', color)
            }
            if (background) {
                this.#scrollmeterContainer.style.setProperty('--scrollmeter-bar-background', background)
            }
            if (height) {
                this.#scrollmeterContainer.style.setProperty('--scrollmeter-bar-height', `${height}px`)
            }
        }
    }

    public getTargetContainer = () => {
        return this.#targetContainer
    }

    public getScrollmeterContainer = () => {
        return this.#scrollmeterContainer
    }

    public getCaptureCanvas = () => {
        return this.#captureCanvas || null
    }

    public getDefaultOptions = () => {
        return this.#defaultOptions
    }

    public updateScrollmeterStyle = (options: ScrollmeterOptions) => {
        this.#defaultOptions = options

        this.setCSSCustomProperties()

        this.#timelineElements?.setCSSCustomProperties()

        // css custom
        if (this.#defaultOptions && this.#defaultOptions.tooltipOptions) {
            const { background, fontColor, fontSize, paddingBlock, paddingInline, width } = this.#defaultOptions.tooltipOptions

            if (background) {
                this.#scrollmeterContainer.style.setProperty('--scrollmeter-tooltip-background', background)
            }
            if (fontColor) {
                this.#scrollmeterContainer.style.setProperty('--scrollmeter-tooltip-font-color', fontColor)
            }
            if (fontSize) {
                this.#scrollmeterContainer.style.setProperty('--scrollmeter-tooltip-font-size', `${fontSize}px`)
            }
            if (paddingBlock) {
                this.#scrollmeterContainer.style.setProperty('--scrollmeter-tooltip-padding-block', `${paddingBlock}px`)
            }
            if (paddingInline) {
                this.#scrollmeterContainer.style.setProperty('--scrollmeter-tooltip-padding-inline', `${paddingInline}px`)
            }
            if (width) {
                this.#scrollmeterContainer.style.setProperty('--scrollmeter-tooltip-width', `${width}px`)
            }
        }
    }
}

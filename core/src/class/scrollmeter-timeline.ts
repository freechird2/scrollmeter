import styles from '../styles/scrollmeter.module.scss'
import { IScrollmeter } from '../types/scrollmeter.types'
import { Scrollmeter } from './scrollmeter'
import { ScrollmeterTooltip } from './scrollmeter-tooltip'

export class ScrollmeterTimeline extends IScrollmeter {
    #scrollmeter: Scrollmeter

    constructor(scrollmeter: Scrollmeter) {
        super()
        this.#scrollmeter = scrollmeter
    }

    #findTimelineElements = (element: HTMLElement): HTMLElement[] => {
        const elArray: HTMLElement[] = []

        const searchH1 = (el: HTMLElement) => {
            if (el.tagName.toLowerCase() === 'h1') {
                if (this.#isElementVisible(el)) {
                    elArray.push(el as HTMLHeadingElement)
                }
            }

            Array.from(el.children).forEach((child) => {
                searchH1(child as HTMLElement)
            })
        }

        searchH1(element)

        return elArray
    }

    #isElementVisible(element: HTMLElement): boolean {
        // 요소 자체나 부모 요소들의 style 체크
        const style = window.getComputedStyle(element)
        if (style.display === 'none') return false
        if (style.visibility === 'hidden') return false
        if (style.opacity === '0') return false

        // 부모 요소들도 순차적으로 확인
        let currentElement: HTMLElement | null = element.parentElement
        while (currentElement) {
            const parentStyle = window.getComputedStyle(currentElement)
            if (parentStyle.display === 'none') return false
            if (parentStyle.visibility === 'hidden') return false
            if (parentStyle.opacity === '0') return false
            currentElement = currentElement.parentElement
        }

        return true
    }

    public createTimeline = (highestZIndex: number): ScrollmeterTimeline => {
        const targetContainer = this.#scrollmeter.getTargetContainer()
        if (!targetContainer) return null

        const targetElement = this.#findTimelineElements(targetContainer)

        if (targetElement.length === 0) return null

        const timelineElements: HTMLElement[] = []
        const timelineWidth = this.#scrollmeter.getDefaultOptions().timelineOptions?.width ?? 4
        let outOfBoundIndex = targetElement.length

        targetElement.map((element) => {
            const scrollContainer = this.#scrollmeter.getTargetContainer()

            if (!scrollContainer) return

            const timelineElement = document.createElement('div')
            timelineElement.classList.add(styles.scrollmeter_timeline)

            const absoluteElementTop = element.getBoundingClientRect().top + window.scrollY
            const absoluteContainerTop = scrollContainer.getBoundingClientRect().top + window.scrollY
            const relativeTargetTop = absoluteElementTop - absoluteContainerTop
            const scrollableHeight = scrollContainer.clientHeight - document.documentElement.clientHeight

            timelineElement.style.zIndex = highestZIndex.toString()

            timelineElement.addEventListener('click', () => {
                element.scrollIntoView({ behavior: 'smooth' })
            })

            if (scrollableHeight > absoluteElementTop) {
                const relativePosition = (relativeTargetTop / scrollableHeight) * 100

                timelineElement.style.left = `${relativePosition > 100 ? `calc(100% - ${timelineWidth}px)` : `${relativePosition}%`}`

                if (this.#scrollmeter.getDefaultOptions().useTooltip) {
                    const tooltip = new ScrollmeterTooltip(this.#scrollmeter)

                    tooltip.createTimelineTooltip(timelineElement, element, relativePosition < 7.6 ? 'left' : 'center')
                }
            } else {
                timelineElement.style.left = `calc(100% - ${timelineWidth * (outOfBoundIndex-- * 4)}px)`

                if (this.#scrollmeter.getDefaultOptions().useTooltip) {
                    const tooltip = new ScrollmeterTooltip(this.#scrollmeter)

                    tooltip.createTimelineTooltip(timelineElement, element, 'right')
                }
            }

            this.#scrollmeter.getScrollmeterContainer()?.appendChild(timelineElement)
            timelineElements.push(timelineElement)
        })

        this.setCSSCustomProperties()

        return this
    }

    public setCSSCustomProperties() {
        const defaultOptions = this.#scrollmeter.getDefaultOptions()
        // css custom
        if (defaultOptions && defaultOptions.timelineOptions) {
            const { color, width } = defaultOptions.timelineOptions

            if (color) {
                this.#scrollmeter.getScrollmeterContainer()?.style.setProperty('--scrollmeter-timeline-color', color)
            }
            if (width) {
                this.#scrollmeter.getScrollmeterContainer()?.style.setProperty('--scrollmeter-timeline-width', `${width}px`)
            }
        }
    }
}

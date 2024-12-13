import { IScrollmeter } from '../types/scrollmeter.types'
import { Scrollmeter } from './scrollmeter'
import styles from '../styles/scrollmeter.module.scss'

export class ScrollmeterTooltip extends IScrollmeter {
    #scrollmeter: Scrollmeter

    constructor(scrollmeter: Scrollmeter) {
        super()
        this.#scrollmeter = scrollmeter
    }

    #cropImageAtPercent = (targetElement: HTMLElement, cropWidth: number = 320) => {
        const captureCanvas = this.#scrollmeter.getCaptureCanvas()
        if (!captureCanvas) return

        const canvasWidth = captureCanvas.width
        const canvasHeight = (canvasWidth * 9) / 16 // 16:9 비율 계산
        const y = Math.max(0, targetElement.getBoundingClientRect().top + window.scrollY - canvasHeight / 2)

        const cropHeight = (cropWidth * 9) / 16 // 16:9 비율 계산

        const tempCanvas = document.createElement('canvas')
        tempCanvas.width = cropWidth
        tempCanvas.height = cropHeight

        const ctx = tempCanvas.getContext('2d')
        if (!ctx) return null

        // 크롭된 영역 그리기
        ctx.drawImage(
            captureCanvas,
            0,
            Math.max(0, Math.min(y, captureCanvas.height - canvasHeight)), // y값 범위 제한
            canvasWidth,
            canvasHeight,
            0,
            0,
            cropWidth,
            cropHeight
        )

        return tempCanvas.toDataURL()
    }

    #createPreview = (dataUrl: string) => {
        const div = document.createElement('div')
        div.classList.add(styles.scrollmeter_timeline_preview)

        const img = new Image()

        img.src = dataUrl

        div.appendChild(img)
        return div
    }

    public createTimelineTooltip = (
        timelineElement: HTMLDivElement,
        targetElement: HTMLElement,
        direction: 'left' | 'right' | 'center'
    ) => {
        if (!targetElement.textContent) return
        const timelineTooltip = document.createElement('div')
        const timelineTooltipText = document.createElement('p')

        if (this.#scrollmeter.getDefaultOptions().usePreview) {
            const dataUrl = this.#cropImageAtPercent(targetElement)

            if (dataUrl) {
                const preview = this.#createPreview(dataUrl)
                timelineTooltip.appendChild(preview)
            }
        }

        timelineTooltip.classList.add(styles.scrollmeter_timeline_tooltip)
        timelineTooltip.classList.add(styles[`scrollmeter_timeline_tooltip_${direction}`])

        timelineTooltipText.textContent = targetElement.textContent

        timelineTooltip.appendChild(timelineTooltipText)

        this.setCSSCustomProperties()

        timelineElement.appendChild(timelineTooltip)
    }

    protected setCSSCustomProperties() {
        const defaultOptions = this.#scrollmeter.getDefaultOptions()

        // css custom
        if (defaultOptions && defaultOptions.tooltipOptions) {
            const { background, fontColor, fontSize, paddingBlock, paddingInline, width } = defaultOptions.tooltipOptions

            if (background) {
                this.#scrollmeter.getScrollmeterContainer()?.style.setProperty('--scrollmeter-tooltip-background', background)
            }
            if (fontColor) {
                this.#scrollmeter.getScrollmeterContainer()?.style.setProperty('--scrollmeter-tooltip-font-color', fontColor)
            }
            if (fontSize) {
                this.#scrollmeter.getScrollmeterContainer()?.style.setProperty('--scrollmeter-tooltip-font-size', `${fontSize}px`)
            }
            if (paddingBlock) {
                this.#scrollmeter.getScrollmeterContainer()?.style.setProperty('--scrollmeter-tooltip-padding-block', `${paddingBlock}px`)
            }
            if (paddingInline) {
                this.#scrollmeter.getScrollmeterContainer()?.style.setProperty('--scrollmeter-tooltip-padding-inline', `${paddingInline}px`)
            }
            if (width) {
                this.#scrollmeter.getScrollmeterContainer()?.style.setProperty('--scrollmeter-tooltip-width', `${width}px`)
            }
        }
    }
}

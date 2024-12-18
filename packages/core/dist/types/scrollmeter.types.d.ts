export interface ScrollmeterTimelineOptions {
    color?: string;
    width?: number;
}
export interface ScrollmeterBarOptions {
    color?: string;
    background?: string;
    height?: number;
}
export interface ScrollmeterTooltipOptions {
    background?: string;
    fontColor?: string;
    fontSize?: number;
    paddingBlock?: number;
    paddingInline?: number;
    width?: number;
}
export interface ScrollmeterOptions {
    targetId?: string;
    target?: string | HTMLElement;
    useTimeline?: boolean;
    useTooltip?: boolean;
    usePreview?: boolean;
    barOptions?: ScrollmeterBarOptions;
    timelineOptions?: ScrollmeterTimelineOptions;
    tooltipOptions?: ScrollmeterTooltipOptions;
}
export declare abstract class IScrollmeter {
    protected abstract setCSSCustomProperties(): void;
}

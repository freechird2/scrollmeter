import { IScrollmeter } from '../types/scrollmeter.types';
import { Scrollmeter } from './scrollmeter';
export declare class ScrollmeterTooltip extends IScrollmeter {
    #private;
    constructor(scrollmeter: Scrollmeter);
    createTimelineTooltip: (timelineElement: HTMLDivElement, targetElement: HTMLElement, direction: "left" | "right" | "center") => HTMLDivElement;
    protected setCSSCustomProperties(): void;
}

import { IScrollmeter } from '../types/scrollmeter.types';
import { Scrollmeter } from './scrollmeter';
export declare class ScrollmeterTimeline extends IScrollmeter {
    #private;
    constructor(scrollmeter: Scrollmeter);
    createTimeline: (contentHeight: number, highestZIndex: number) => HTMLElement[];
    protected setCSSCustomProperties(): void;
}

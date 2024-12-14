import { IScrollmeter } from '../types/scrollmeter.types';
import { Scrollmeter } from './scrollmeter';
export declare class ScrollmeterTimeline extends IScrollmeter {
    #private;
    constructor(scrollmeter: Scrollmeter);
    createTimeline: (highestZIndex: number) => ScrollmeterTimeline;
    setCSSCustomProperties(): void;
}

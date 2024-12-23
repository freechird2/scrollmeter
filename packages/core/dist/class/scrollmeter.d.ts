import { IScrollmeter, ScrollmeterOptions } from '../types/scrollmeter.types';
export declare class Scrollmeter extends IScrollmeter {
    #private;
    constructor(options: ScrollmeterOptions);
    protected setCSSCustomProperties: () => void;
    getTargetContainer: () => HTMLElement;
    getScrollmeterContainer: () => HTMLDivElement;
    getCaptureCanvas: () => HTMLCanvasElement;
    getCanvasRatio: () => number;
    getDefaultOptions: () => ScrollmeterOptions;
    render: (options: ScrollmeterOptions) => void;
    updateScrollmeterStyle: (options: ScrollmeterOptions) => void;
}

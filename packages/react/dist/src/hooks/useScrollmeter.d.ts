import { ScrollmeterOptions } from '@scrollmeter/core';
export declare const useScrollmeter: (options: Omit<ScrollmeterOptions, 'target' | 'targetId'>) => {
    targetRef: import('react').MutableRefObject<HTMLElement>;
};

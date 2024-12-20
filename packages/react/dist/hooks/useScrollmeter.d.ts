import React from 'react';
import { UseScrollmeterOptions } from '..';
export default function useScrollmeter<T extends HTMLElement>(options: UseScrollmeterOptions): {
    targetRef: React.RefObject<T>;
};

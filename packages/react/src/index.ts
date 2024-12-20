import { ScrollmeterOptions } from '@scrollmeter/core'

export { default as useScrollmeter } from './hooks/useScrollmeter'

export type UseScrollmeterOptions = Omit<ScrollmeterOptions, 'target' | 'targetId'>

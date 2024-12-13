import { Scrollmeter } from './class/scrollmeter'
import { ScrollmeterOptions } from './types/scrollmeter.types'

export const createScrollmeter = (options: ScrollmeterOptions) => {
    const scrollmeter = new Scrollmeter(options)
    scrollmeter.createScrollmeter()
}

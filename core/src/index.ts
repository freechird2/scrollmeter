import { Scrollmeter } from './class/scrollmeter'
import { ScrollmeterOptions } from './types/scrollmeter.types'

export const createScrollmeter = (options: ScrollmeterOptions): Scrollmeter | null => {
    try {
        return new Scrollmeter(options)
    } catch (error) {
        console.error(error)
        return null
    }
}

import { ScrollmeterOptions } from '@scrollmeter/core'
import { useEffect, useRef } from 'react'

export const useScrollmeter = (options: Omit<ScrollmeterOptions, 'target' | 'targetId'>) => {
    const targetRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!targetRef.current) return

        console.log('targetRef.current', targetRef.current)
        // const scrollmeter = createScrollmeter(options)
    }, [targetRef.current])

    return {
        targetRef,
    }
}

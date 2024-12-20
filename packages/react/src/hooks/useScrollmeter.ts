import React, { useEffect, useMemo, useRef } from 'react'
import { UseScrollmeterOptions } from '..'
import { createScrollmeter, ScrollmeterOptions } from '@scrollmeter/core'

export default function useScrollmeter<T extends HTMLElement>(options: UseScrollmeterOptions) {
    const targetRef = useRef<T>(null)
    const scrollmeterRef = useRef<ReturnType<typeof createScrollmeter> | null>(null)

    const memoizedOptions = useMemo(
        () => ({
            ...options,
            barOptions: { ...options.barOptions },
            tooltipOptions: { ...options.tooltipOptions },
            timelineOptions: { ...options.timelineOptions },
        }),
        [options]
    )

    useEffect(() => {
        if (!scrollmeterRef.current) return

        scrollmeterRef.current.render(options)
    }, [memoizedOptions.usePreview, memoizedOptions.useTimeline, memoizedOptions.useTooltip])

    useEffect(() => {
        if (!scrollmeterRef.current) return

        scrollmeterRef.current.updateScrollmeterStyle(memoizedOptions)
    }, [memoizedOptions.barOptions, memoizedOptions.tooltipOptions, memoizedOptions.timelineOptions])

    useEffect(() => {
        if (!targetRef.current || scrollmeterRef.current) return

        scrollmeterRef.current = createScrollmeter({
            target: targetRef.current,
            ...options,
        })
    }, [targetRef.current])

    return { targetRef }
}

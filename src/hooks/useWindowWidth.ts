'use client'

import { useState, useEffect } from 'react'

/**
 * Returns the current browser's window width
*/
export default function useWindowWidth () {
    const [width, setWidth] = useState<number>(1001)

    useEffect(() => {
        if (window === undefined) {
            setWidth(1001)
            return;
        }

        const handleResize = () => setWidth(window === undefined ? 1001 : window.innerWidth)

        window.addEventListener('resize', handleResize)
    }, [])

    return width
}
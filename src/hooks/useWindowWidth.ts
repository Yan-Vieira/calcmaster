'use client'

import { useState, useEffect } from 'react'

/**
 * Retorna a largura atual da janela do navegador.
*/
export default function useWindowWidth () {
    const [width, setWidth] = useState<number>(1000)

    useEffect(() => {
        if (window === undefined) {
            setWidth(1000)
            return;
        }

        const handleResize = () => setWidth(window === undefined ? 1000 : window.innerWidth)

        window.addEventListener('resize', handleResize)

        window.removeEventListener('resize', handleResize)
    }, [])

    return width
}
'use client'

import { useState, useEffect } from 'react'

/**
 * Retorna a largura atual da janela do navegador.
*/
export default function useWindowWidth () {
    const [width, setWidth] = useState<number>()

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)
    }, [])

    return width
}
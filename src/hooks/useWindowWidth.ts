'use client'

import { useState, useEffect } from 'react'

/**
 * Retorna a largura atual da janela do navegador.
*/
export default function useWindowWidth () {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [window.innerWidth])

    return width
}
import { useEffect, useState } from 'react'

import operate from './operate'

export default function usePxToEm () {
    const [values, setValues] = useState<PxToEmConverter.Values>({
        reCalc: false,
        px: '',
        em: '',
    })

    const [defaultSize, setDefaultSize] = useState<PxToEmConverter.defaultSize>('16')

    useEffect(() => {
        if (values.reCalc === false) {
            setValues(state => ({
                ...state,
                reCalc: true
            }))

            return;
        }

        const result = operate(values, Number(defaultSize), 'px to em')

        setValues(state => ({
            ...state,
            reCalc: false,
            em: Number(result) <= 0 ? '' : result
        }))
//eslint-disable-next-line
    }, [values.px])

    useEffect(() => {
        if (values.reCalc === false) {
            
            setValues(state => ({
                ...state,
                reCalc: true
            }))

            return;
        }

        const result = operate(values, Number(defaultSize), 'em to px')

        setValues(state => ({
            ...state,
            reCalc: false,
            px: Number(result) <= 0 ? '' : result
        }))
//eslint-disable-next-line
    }, [values.em])

    useEffect(() => {

        const result = operate(values, Number(defaultSize), 'px to em')

        setValues(state => ({
            ...state,
            em: Number(result) <= 0 ? '' : result
        }))
//eslint-disable-next-line
    }, [defaultSize])

    return {
        values,
        setValues,
        defaultSize,
        setDefaultSize
    }
}
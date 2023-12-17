import { useEffect, useState } from 'react'
import operate from './operate'

/**
 * Returns true if one of the values is empty, otherwise returns false
*/
const isValueEmpty = (values:TimeDifference.Values, params:TimeDifference.Params) => {
    let result = false

    Object.keys(values).forEach(key => {
        if (values[key][params.diffBetween] === '') {
            result = true
        }
    })

    return result
}

export default function useTimeDifference () {
    const [values, setValues] = useState<TimeDifference.Values>({
        inputA: {
            time: '',
            date: ''
        },
        inputB: {
            time: '',
            date: ''
        }
    })

    const [results, setResults] = useState<TimeDifference.Results>({
        timeDifference: '',
        dateDifference: ''
    })

    const [intermediary, setIntermediary] = useState<TimeDifference.Intermediary>({
            time: '',
            date: ''
    })

    const [params, setParams] = useState<TimeDifference.Params>({
        diffBetween: 'time',
        timeResultIn: 'full',
        dateResultIn: 'full'
    })

    useEffect(() => {
        if (isValueEmpty(values, params) === true) return;

        const cases = {
            'time': () => {
                setResults(state => ({
                    ...state,
                    timeDifference: operate(values, params)
                }))
            },
            'date': () => {
                setResults(state => ({
                    ...state,
                    dateDifference: operate(values, params)
                }))
            }
        }

        cases[params.diffBetween]()

    }, [values, params])

    useEffect(() => {
        if (isValueEmpty(values, params) === true) return;

        setValues(state => ({
            ...state,
            inputB: {
                ...state.inputB,
                [params.diffBetween]: values.inputA[params.diffBetween]
            },
            inputA: {
                ...state.inputA,
                [params.diffBetween]: intermediary[params.diffBetween]
            }
        }))
    }, [intermediary])

    return {
        values,
        setValues,
        results,
        setResults,
        intermediary,
        setIntermediary,
        params,
        setParams
    }
}
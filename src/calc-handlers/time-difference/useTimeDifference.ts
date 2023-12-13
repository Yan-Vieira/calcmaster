import { useEffect, useState } from 'react'
import operate from './operate'

/**
 * Returns true if one of the values is empty, otherwise returns false
*/
const isValueEmpty = (values:TimeDifference.Values) => {
    let result = false

    Object.keys(values).forEach(key => {
        if (values[key].time === '' || values[key].date === '') {
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

    const [results, setResults] = useState({
        timeDifference: '',
        dateDifference: ''
    })

    const [params, setParams] = useState<TimeDifference.Params>({
        diffBetween: 'time',
        timeResultIn: 'full',
        dateResultIn: 'full'
    })

    return {
        values,
        setValues,
        results,
        setResults,
        params,
        setParams
    }
}
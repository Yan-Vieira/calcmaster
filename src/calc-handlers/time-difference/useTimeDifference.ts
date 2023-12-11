import { useEffect, useState } from 'react'

export default function useTimeDifference () {
    const [values, setValues] = useState<TimeDifference.Values>({
        startTime: '',
        endTime: '',
        startDate: '',
        endDate: ''
    })

    const [results, setResults] = useState({
        timeDifference: '',
        dateDifference: ''
    })

    return {
        values,
        setValues,
        results,
        setResults
    }
}
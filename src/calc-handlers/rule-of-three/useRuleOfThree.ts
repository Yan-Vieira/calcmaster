import { useEffect, useState } from 'react'

import operate from './operate'

/**
 * Returns false if one of the values is empty, otherwise returns true
*/
const checkValues = (values:SROT.values) => {
    let result = true

    Object.keys(values).forEach(key => {
        if (values[key] === '') {
            result = false
        }
    })
}

export default function useRuleOfThree () {
    const [values, setValues] = useState<SROT.values>({
        valueA: '',
        valueB: '',
        valueC: '',
        valueD: '',
    })

    const [valueX, setValueX] = useState('')

    const [valueXOwner, setValueXOwner] = useState<SROT.valueXOwner>('valueD')

    useEffect(() => {

        setValueX(operate(values, valueXOwner, 'directly'))
    }, [values])

    return {
        values: {
            ...values,
            valueX
        },
        setValues,
        valueXOwner,
        setValueXOwner
    }
}
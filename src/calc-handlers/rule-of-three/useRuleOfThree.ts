import { useEffect, useState } from 'react'

import operate from './operate'

/**
 * Returns true if one of the values is empty, otherwise returns false
*/
const isValueEmpty = (values:SROT.values, valueXOwner:SROT.valueXOwner) => {
    let result = false

    Object.keys(values).forEach(key => {
        if (key === valueXOwner) return;

        if (values[key] === '') {
            result = true
        }
    })

    return result
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

    const [proportionality, setProportionality] = useState<SROT.proportionality>('directly')

    useEffect(() => {
        if (isValueEmpty(values, valueXOwner) === true) {
            setValueX('')

            return;
        }

        setValueX(operate(values, valueXOwner, proportionality))
//eslint-disable-next-line
    }, [values, proportionality])

    useEffect(() => {
        setValues({
            valueA: '',
            valueB: '',
            valueC: '',
            valueD: ''
        })
    }, [valueXOwner])

    return {
        values: {
            ...values,
            valueX
        },
        setValues,
        valueXOwner,
        setValueXOwner,
        proportionality,
        setProportionality
    }
}
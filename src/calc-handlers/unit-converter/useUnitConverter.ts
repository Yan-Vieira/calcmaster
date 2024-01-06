import { useEffect, useState } from "react"
import unitsList from "./unitsList"
import operate from "./operate"

const isIntermediaryEmpty = (
    values:UnitConverter.Intermediary
) => {
    let result = false

    if (values.valueB === '' && values.valueBUnit === '') {
        result = true
    }

    return result
}

export default function useUnitConverter () {

    const [values, setValues] = useState<UnitConverter.Values>({
        valueA: '',
        valueB: ''
    })

    const [params, setParams] = useState<UnitConverter.Params>({
        valueAUnit: '°',
        valueBUnit: 'rad',
        measure: 'angle',
        rounding: 0
    })

    const [intermediary, setIntermediary] = useState<UnitConverter.Intermediary>({
        valueB: '',
        valueBUnit: ''
    })

    useEffect(() => {
        setValues(state => ({
            ...state,
            valueB: state.valueA === '' ? '' : operate(state, params)
        }))

    }, [values.valueA, params])

    useEffect(() => {
        if (isIntermediaryEmpty(intermediary) === true) return;

        setValues(state => ({
            valueA: intermediary.valueB,
            valueB: state.valueA
        }))

        setParams(state => ({
            ...state,
            valueAUnit: intermediary.valueBUnit as UnitConverter.unit,
            valueBUnit: state.valueAUnit
        }))

    }, [intermediary])

    return {
        values,
        setValues,
        params,
        setParams,
        setIntermediary,
        /**
         * Methods to get the avaidable units in the unit converter
        */
        unitsList
    }
}
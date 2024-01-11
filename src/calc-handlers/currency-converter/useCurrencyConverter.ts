import { useEffect, useState } from 'react'

import currencyList from './currencyList'

export default function useCurrencyConverter () {

    const [values, setValues] = useState<CurrencyConverter.Values>({
        valueA: '',
        valueB: ''
    })

    const [params, setParams] = useState<CurrencyConverter.Params>({
        valueACurrency: 'BRL',
        valueBCurrency: 'USD'
    })

    return {
        values,
        setValues,
        params,
        setParams,
        currencyList
    }
}
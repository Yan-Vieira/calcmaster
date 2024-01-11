import axios from "axios"

const getQuotation = async (params:CurrencyConverter.Params) => {
    const desiredCurrencyQuotation = await axios.get(`https://economia.awesomeapi.com.br/last/${params.valueACurrency.toLocaleUpperCase()}-${params.valueBCurrency.toLocaleUpperCase()}`)

    return desiredCurrencyQuotation.data
}

export default function operate (values:CurrencyConverter.Values, params:CurrencyConverter.Params) {
    console.log(getQuotation(params))
}
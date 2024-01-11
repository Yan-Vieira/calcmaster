const currencyList = [
    {
        symbol: 'BRL',
        en: 'brazilian real',
        ptBr: 'real brasileiro',
    },
    {
        symbol: 'USD',
        en: 'us dollar',
        ptBr: 'dólar americano',
    },{
        symbol: 'EUR',
        en: 'euro',
        ptBr: 'euro',
    }
] as CurrencyConverter.currencyObject[]

function getCurrencies () {
    return currencyList
}

export default {
    getCurrencies
}
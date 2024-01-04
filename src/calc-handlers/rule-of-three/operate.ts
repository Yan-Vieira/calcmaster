const formatNumber = (values:SROT.values, result:string) => {
    /*console.log('formatNumberDebug', `result: ${result}`)*/

    if (Number.isInteger(Number(result))) {
        return result
    }

    const biggerString = Object.values(values).reduce((biggerString, string) => {

        const biggerStringDecimals = string.slice(biggerString.indexOf('.')|| biggerString.length)

        const stringDecimals = string.slice(string.indexOf('.'))

        if (stringDecimals.length > biggerStringDecimals.length) {
          return string
        } else {
          return biggerString
        }
        
    })

    const biggerStringDecimalsLength = biggerString.slice(biggerString.indexOf('.') + 1, biggerString.length).length

    let newResult = Number(result).toFixed(biggerStringDecimalsLength)

    if (Number(newResult) === 0 || !biggerString.includes('.')) {
        const resultDecimals = result.slice(result.indexOf('.') + 1, result.length)

        const newDecimalsLength = resultDecimals.search(/[1-9]/) + 2

        newResult = Number(result).toFixed(newDecimalsLength)

        /*console.log({
            resultDecimals,
            newDecimalsLength
        })*/
    }

    /*console.log({
        biggerString,
        biggerStringDecimalsLength,
        newResult
    })*/

    return `${newResult}`
}

/**
 * DP = Directly Proportional
*/
const DProportionalCases = {
    'valueA': (values:SROT.values) => {
        return `${(Number(values.valueB) * Number(values.valueC)) / Number(values.valueD)}`
    },
    'valueB': (values:SROT.values) => {
        return `${(Number(values.valueA) * Number(values.valueD)) / Number(values.valueC)}`
    },
    'valueC': (values:SROT.values) => {
        return `${(Number(values.valueA) * Number(values.valueD)) / Number(values.valueB)}`
    },
    'valueD': (values:SROT.values) => {
        return `${(Number(values.valueB) * Number(values.valueC)) / Number(values.valueA)}`
    }
} as {
    [key: string]: (values:SROT.values) => string
}

/**
 * INVP = INVersely Proportional
*/
const INVProportionalCases = {
    'valueA': (values) => {
        return `${`${(Number(values.valueD) * Number(values.valueC)) / Number(values.valueB)}`}`
    },
    'valueB': (values) => {
        return `${(Number(values.valueC) * Number(values.valueD)) / Number(values.valueA)}`
    },
    'valueC': (values) => {
        return `${(Number(values.valueA) * Number(values.valueB)) / Number(values.valueD)}`
    },
    'valueD': (values) => {
        return `${(Number(values.valueB) * Number(values.valueA)) / Number(values.valueC)}`
    }
} as {
    [key: string]: (values:SROT.values) => string
}

export default function operate (values:SROT.values, valueXOwner:SROT.valueXOwner, proportionality:SROT.proportionality) {
    
    let result = ''

    proportionality === 'directly' ?
        result = DProportionalCases[valueXOwner](values)
    : proportionality === 'inversely' ?
        result = INVProportionalCases[valueXOwner](values)
    : console.warn(`The proportionality type ${proportionality} is not valid`)

    result = formatNumber(values, result)

    return result
}
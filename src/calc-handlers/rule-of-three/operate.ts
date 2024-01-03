const formatNumber = (values:SROT.values, result:string) => {
    const everyValueIsInteger = Object.keys(values).every(key => {
        return Number.isInteger(Number(values[key]))
    })

    if (everyValueIsInteger) {
        return result
    }

    const biggerValue = Object.keys(values).reduce((biggerProp, prop) => {
        console.log(biggerProp, prop)

        const biggerStringDecimals = values[biggerProp].slice(values[biggerProp].indexOf('.') || 0, values[biggerProp].length - 1)

        const stringDecimals = values[prop].slice(values[prop].indexOf('.'), values[prop].length - 1)

        if (stringDecimals.length > biggerStringDecimals.length) {
          return prop;
        } else {
          return biggerProp;
        }
        
    }, Object.keys(values)[0])

    const decimals = values[biggerValue].slice(values[biggerValue].indexOf('.'), values[biggerValue].length - 1)

    console.log(decimals)

    return `${Number(result).toFixed(decimals.length)}`
}

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
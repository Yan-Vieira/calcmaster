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

    return result
}
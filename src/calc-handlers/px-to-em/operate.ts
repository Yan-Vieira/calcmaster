const formatNumber = (value:string) => {

    if (Number.isInteger(Number(value))) return value

    const extractDecimals = (value:string) => {
        return value.slice(value.indexOf('.') + 1, value.length)
    }

    const valueDecimals = extractDecimals(value)

    if (valueDecimals.length <= 4) return value

    return Number(value).toFixed(4)

}

const conversionFormulas = {
    'px to em': (values, defaultSize) => {return Number(values.px) / defaultSize},
    'em to px': (values, defaultSize) => {return Number(values.em) * defaultSize}
} as {
    [key: string]: (values:PxToEmConverter.Values, defaultSize:number) => number
}

/**
 * 
 * @param values The values to use in the conversion
 * @param defaultSize The default font-size from body, in pixels
 * @param conversionOrder whether the desired conversion is from px to em or from em to px
*/
export default function operate (values:PxToEmConverter.Values, defaultSize:number, conversionOrder: 'px to em' | 'em to px') {

    return formatNumber(`${conversionFormulas[conversionOrder](values, defaultSize)}`)
}
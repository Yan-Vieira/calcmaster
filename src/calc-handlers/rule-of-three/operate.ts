const DProportionalCases = {

} as {[key: string]: (values:SROT.values, valueXOwner:SROT.valueXOwner) => string}

const INDProportionalCases = {
    
} as {[key: string]: (values:SROT.values, valueXOwner:SROT.valueXOwner) => string}

export default function operate (values:SROT.values, valueXOwner:SROT.valueXOwner, proportionality:SROT.proportionality) {
    
    let result = ''

    proportionality === 'directly' ?
        result = DProportionalCases[proportionality](values, valueXOwner)
    : proportionality === 'indirectly' ?
        result = INDProportionalCases[proportionality](values, valueXOwner)
    : console.error(`The proportionality type ${proportionality} is not valid`)

    return result
}
const unitsList = {
    'angle': {
        baseUnit: '°',
        ptBr: 'ângulo',
        units: [
            {
                symbol: 'arcsec',
                en: 'arc second',
                ptBr: 'segundo de arco'
            },
            {   
                symbol: 'rad',
                en: 'radian',
                ptBr: 'radiano'
            },
            {
                symbol: 'arcmin',
                en: 'arc minute',
                ptBr: 'minuto de arco'
            },
            {
                symbol: '°',
                en: 'degree',
                ptBr: 'grau'
            },
            {
                symbol: 'gon',
                en: 'grad',
                ptBr: 'grado'
            }
        ]
    }
} as {
    [key: string]: {
        baseUnit: string
        ptBr: string
        units: UnitConverter.UnitObject[]
    }
}

/**
 * @returns An object containing every measure and its correspondent properties and units
*/
function getUnitsList () {
    return unitsList
}

/**
 * @returns An array containing every measure name, translated to pt-br
*/
function getTranslatedMeasures () {
    return Object.keys(unitsList).map(key => {
        return unitsList[key].ptBr
    }) as UnitConverter.measure[]
}

/**
 * @param measure The name from the desired measure
 * @returns An array containing the correspondent units and its properties from the desired measure
*/
function getUnitsFromMeasure (measure: UnitConverter.measure) {
    return unitsList[measure].units
}

function getBaseUnit (measure: UnitConverter.measure) {
    return unitsList[measure].baseUnit as UnitConverter.unit<UnitConverter.measure>
}

export default {
    getUnitsList,
    getTranslatedMeasures,
    getUnitsFromMeasure,
    getBaseUnit
}
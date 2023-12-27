import unitsList from "./unitsList"

const operation = (
    values:UnitConverter.Values,
    params:UnitConverter.Params<UnitConverter.measure>
):number => {
    
    if (params.valueAUnit === unitsList.getBaseUnit(params.unitType)) {
        return convertionFormulas[params.unitType][params.valueBUnit].fromBaseUnit(Number(values.valueA))
    }

    const toBaseUnit = convertionFormulas[params.unitType][params.valueAUnit].toBaseUnit(Number(values.valueA))

    if (params.valueBUnit === unitsList.getBaseUnit(params.unitType)) {
        return toBaseUnit
    } else return operation({
        ...values,
        valueA: `${toBaseUnit}`
    }, {
        ...params,
        valueAUnit: unitsList.getBaseUnit(params.unitType),
        valueBUnit: params.valueAUnit
    })
}

const convertionFormulas = {
    'angle': {
        'arcsec': {
            toBaseUnit: (value) => {return value / 3600},
            fromBaseUnit: (value) => {return value * 3600}
        },
        'rad': {
            toBaseUnit: (value) => {return value * 180 / Math.PI},
            fromBaseUnit: (value) => {return value * Math.PI / 180}
        },
        'arcmin': {
            toBaseUnit: (value) => {return value / 60},
            fromBaseUnit: (value) => {return value * 60}
        },
        '°': {
            toBaseUnit: (value) => {return value * 1},
            fromBaseUnit: (value) => {return value * 1}
        },
        'gon': {
            toBaseUnit: (value) => {return value * 180 / 200},
            fromBaseUnit: (value) => {return value * 200 / 180}
        }
    }
} as {
    [key in UnitConverter.measure]: {
        [key:string]: {
            toBaseUnit: (value:number) => number,
            fromBaseUnit: (value:number) => number
        }
    }
}

export default function operate (
    values:UnitConverter.Values,
    params:UnitConverter.Params<UnitConverter.measure>
) {
    return `${operation(values, params)}`
}
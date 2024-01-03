import unitsList from "./unitsList"

const operation = (
    values:UnitConverter.Values,
    params:UnitConverter.Params
):number => {

    if (params.valueAUnit === params.valueBUnit) return Number(values.valueA)
    
    if (params.valueAUnit === unitsList.getBaseUnit(params.measure)) {
        return convertionFormulas[params.measure][params.valueBUnit].fromBaseUnit(Number(values.valueA))
    }

    const toBaseUnit = convertionFormulas[params.measure][params.valueAUnit].toBaseUnit(Number(values.valueA))

    if (params.valueBUnit === unitsList.getBaseUnit(params.measure)) {
        return toBaseUnit
    } else return operation({
        ...values,
        valueA: `${toBaseUnit}`
    }, {
        ...params,
        valueAUnit: unitsList.getBaseUnit(params.measure),
        valueBUnit: params.valueBUnit
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
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'gon': {
            toBaseUnit: (value) => {return value * 180 / 200},
            fromBaseUnit: (value) => {return value * 200 / 180}
        }
    },

    'area': {
        'acre': {
            toBaseUnit: (value) => {return value / 4047},
            fromBaseUnit: (value) => {return value * 4047}
        },
        'ha': {
            toBaseUnit: (value) => {return value / 10000},
            fromBaseUnit: (value) => {return value * 10000}
        },
        'in²': {
            toBaseUnit: (value) => {return value / 1550},
            fromBaseUnit: (value) => {return value * 1550}
        },
        'ft²': {
            toBaseUnit: (value) => {return value / 10.764},
            fromBaseUnit: (value) => {return value * 10.764}
        },
        'yd²': {
            toBaseUnit: (value) => {return value / 1.196},
            fromBaseUnit: (value) => {return value * 1.196}
        },
        'mi²': {
            toBaseUnit: (value) => {return value / (2.59 * 10**6)},
            fromBaseUnit: (value) => {return value * (2.59 * 10**6)}
        },
        'cm²': {
            toBaseUnit: (value) => {return value / 10000},
            fromBaseUnit: (value) => {return value * 10000}
        },
        'm²': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'km²': {
            toBaseUnit: (value) => {return value * (10**6)},
            fromBaseUnit: (value) => {return value / (10**6)}
        }
    },

    'data storage': {
        'b': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'B': {
            toBaseUnit: (value) => {return value * 8},
            fromBaseUnit: (value) => {return value / 8}
        },
        'kb': {
            toBaseUnit: (value) => {return value * 1000},
            fromBaseUnit: (value) => {return value / 1000}
        },
        'KB': {
            toBaseUnit: (value) => {return value * 8000},
            fromBaseUnit: (value) => {return value / 8000}
        },
        'mb': {
            toBaseUnit: (value) => {return value * (10**6)},
            fromBaseUnit: (value) => {return value / (10**6)}
        },
        'MB':{
            toBaseUnit: (value) => {return value * (8 * 10**6)},
            fromBaseUnit: (value) => {return value / (8 * 10**6)}
        },
        'gb': {
            toBaseUnit: (value) => {return value * (10**9)},
            fromBaseUnit: (value) => {return value / (10**9)}
        },
        'GB': {
            toBaseUnit: (value) => {return value * (8 * 10**9)},
            fromBaseUnit: (value) => {return value / (8 * 10**9)}
        },
        'tb': {
            toBaseUnit: (value) => {return value * (10**12)},
            fromBaseUnit: (value) => {return value / (10**12)}
        },
        'TB': {
            toBaseUnit: (value) => {return value * (8 * 10**12)},
            fromBaseUnit: (value) => {return value / (8 * 10**12)}
        },
        'pb': {
            toBaseUnit: (value: number) => {return value * (10**15)},
            fromBaseUnit: (value: number) => {return value / (10**15)}
        },
        'PB': {
            toBaseUnit: (value) => {return value * (8 * 10**15)},
            fromBaseUnit: (value) => {return value / (8 * 10**15)}
        },
        'eb': {
            toBaseUnit: (value: number) => {return value * (10**18)},
            fromBaseUnit: (value: number) => {return value / (10**18)}
        },
        'EB': {
            toBaseUnit: (value) => {return value * (8 * 10**18)},
            fromBaseUnit: (value) => {return value / (8 * 10**18)}
        },
        'zb': {
            toBaseUnit: (value: number) => {return value * (10**21)},
            fromBaseUnit: (value: number) => {return value / (10**21)}
        },
        'ZB': {
            toBaseUnit: (value) => {return value * (8 * 10**21)},
            fromBaseUnit: (value) => {return value / (8 * 10**21)}
        },
        'yb': {
            toBaseUnit: (value: number) => {return value * (10**24)},
            fromBaseUnit: (value: number) => {return value / (10**24)}
        },
        'YB': {
            toBaseUnit: (value) => {return value * (8 * 10**24)},
            fromBaseUnit: (value) => {return value / (8 * 10**24)}
        }
    },

    'data transmission': {
        'b/s': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'B/s': {
            toBaseUnit: (value) => {return value * 8},
            fromBaseUnit: (value) => {return value / 8}
        },
        'kb/s': {
            toBaseUnit: (value) => {return value * 1000},
            fromBaseUnit: (value) => {return value / 1000}
        },
        'KB/s': {
            toBaseUnit: (value) => {return value * 8000},
            fromBaseUnit: (value) => {return value / 8000}
        },
        'mb/s': {
            toBaseUnit: (value) => {return value * (10**6)},
            fromBaseUnit: (value) => {return value / (10**6)}
        },
        'MB/s': {
            toBaseUnit: (value) => {return value * (8 * 10**6)},
            fromBaseUnit: (value) => {return value / (8 * 10**6)}
        },
        'gb/s': {
            toBaseUnit: (value) => {return value * (10**9)},
            fromBaseUnit: (value) => {return value / (10**9)}
        },
        'GB/s': {
            toBaseUnit: (value) => {return value * (8 * 10**9)},
            fromBaseUnit: (value) => {return value / (8 * 10**9)}
        },
        'tb/s': {
            toBaseUnit: (value) => {return value * (10**12)},
            fromBaseUnit: (value) => {return value / (10**12)}
        },
        'TB/s': {
            toBaseUnit: (value) => {return value * (8 * 10**12)},
            fromBaseUnit: (value) => {return value / (8 * 10**12)}
        }
    },

    'energy': {
        'J': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'kJ': {
            toBaseUnit: (value) => {return value * 1000},
            fromBaseUnit: (value) => {return value / 1000}
        },
        'cal': {
            toBaseUnit: (value) => {return value * 4.18},
            fromBaseUnit: (value) => {return value / 4.18}
        },
        'kcal': {
            toBaseUnit: (value) => {return value * 418},
            fromBaseUnit: (value) => {return value / 418}
        },
        'wh': {
            toBaseUnit: (value: number) => {return value * 3600},
            fromBaseUnit: (value: number) => {return value / 3600}
        },
        'kWh': {
            toBaseUnit: (value) => {return value * (3.6 * 10**6)},
            fromBaseUnit: (value) => {return value / (3.6 * 10**6)}
        }
    },

    'frequency': {
        'Hz': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'kHz': {
            toBaseUnit: (value) => {return value * 1000},
            fromBaseUnit: (value) => {return value / 1000}
        },
        'MHz': {
            toBaseUnit: (value) => {return value * (10**6)},
            fromBaseUnit: (value) => {return value / (10**6)}
        },
        'GHz': {
            toBaseUnit: (value) => {return value * (10**9)},
            fromBaseUnit: (value) => {return value / (10**9)}
        }
    },

    'length': {
        'in': {
            toBaseUnit: (value) => {return value / 39.37},
            fromBaseUnit: (value) => {return value * 39.37}
        },
        'ft': {
            toBaseUnit: (value) => {return value / 3.281},
            fromBaseUnit: (value) => {return value * 3.281}
        },
        'yd': {
            toBaseUnit: (value) => {return value / 1.094},
            fromBaseUnit: (value) => {return value * 1.094}
        },
        'mi': {
            toBaseUnit: (value) => {return value * 1609},
            fromBaseUnit: (value) => {return value / 1609}
        },
        'NM': {
            toBaseUnit: (value) => {return value * 1852},
            fromBaseUnit: (value) => {return value / 1852}
        },
        'nm': {
            toBaseUnit: (value) => {return value / (10**9)},
            fromBaseUnit: (value) => {return value * (10**9)}
        },
        'μm': {
            toBaseUnit: (value) => {return value / (10**6)},
            fromBaseUnit: (value) => {return value * (10**6)}
        },
        'mm': {
            toBaseUnit: (value) => {return value / 1000},
            fromBaseUnit: (value) => {return value * 1000}
        },
        'cm': {
            toBaseUnit: (value) => {return value / 100},
            fromBaseUnit: (value) => {return value * 100}
        },
        'm': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'km': {
            toBaseUnit: (value) => {return value * 1000},
            fromBaseUnit: (value) => {return value / 1000}
        }
    },

    'mass': {
        'oz': {
            toBaseUnit: (value) => {return value * 28.35},
            fromBaseUnit: (value) => {return value / 28.35}
        },
        'lb': {
            toBaseUnit: (value) => {return value * 453.6},
            fromBaseUnit: (value) => {return value / 453.6}
        },
        'μg': {
            toBaseUnit: (value) => {return value / (10**6)},
            fromBaseUnit: (value) => {return value * (10**6)}
        },
        'mg': {
            toBaseUnit: (value) => {return value / 1000},
            fromBaseUnit: (value) => {return value * 1000}
        },
        'g': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'kg': {
            toBaseUnit: (value) => {return value * 1000},
            fromBaseUnit: (value) => {return value / 1000}
        },
        't': {
            toBaseUnit: (value) => {return value * (10**6)},
            fromBaseUnit: (value) => {return value / (10**6)}
        }
    },

    'pressure': {
        'Torr': {
            toBaseUnit: (value: number) => {return value * 133.3},
            fromBaseUnit: (value: number) => {return value / 133.3}
        },
        'psi': {
            toBaseUnit: (value) => {return value * 6895},
            fromBaseUnit: (value) => {return value / 6895}
        },
        'Pa': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'bar': {
            toBaseUnit: (value) => {return value * (10**5)},
            fromBaseUnit: (value) => {return value / (10**5)}
        },
        'atm': {
            toBaseUnit: (value) => {return value * 101300},
            fromBaseUnit: (value) => {return value / 101300}
        }
    },

    'speed': {
        'kn': {
            toBaseUnit: (value) => {return value / 1.944},
            fromBaseUnit: (value) => {return value * 1.944}
        },
        'km/h': {
            toBaseUnit: (value) => {return value / 3.6},
            fromBaseUnit: (value) => {return value * 3.6}
        },
        'm/s': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'ft/s': {
            toBaseUnit: (value) => {return value / 3.281},
            fromBaseUnit: (value) => {return value * 3.281}
        },
        'mi/h': {
            toBaseUnit: (value) => {return value / 2.237},
            fromBaseUnit: (value) => {return value * 2.237}
        }
    },

    'temperature': {
        '°C': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        '°K': {
            toBaseUnit: (value: number) => {return value + 273.15},
            fromBaseUnit: (value: number) => {return value - 273.15}
        },
        '°F': {
            toBaseUnit: (value) => {return (value - 32) / 1.8},
            fromBaseUnit: (value) => {return (value * 1.8) + 32}
        }
    },

    'time': {
        'ms': {
            toBaseUnit: (value) => {return value / 1000},
            fromBaseUnit: (value) => {return value * 1000}
        },
        's': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'min': {
            toBaseUnit: (value) => {return value * 60},
            fromBaseUnit: (value) => {return value / 60}
        },
        'h': {
            toBaseUnit: (value) => {return value * 3600},
            fromBaseUnit: (value) => {return value / 3600}
        },
        'd': {
            toBaseUnit: (value) => {return value * 86400},
            fromBaseUnit: (value) => {return value / 86400}
        },
        'week': {
            toBaseUnit: (value) => {return value * 60.48 * (10**4)},
            fromBaseUnit: (value) => {return value / 60.48 * (10**4)}
        },
        'month': {
            toBaseUnit: (value) => {return value * (2.628 * (10**6))},
            fromBaseUnit: (value) => {return value / (2.628 * (10**6))}
        },
        'y': {
            toBaseUnit: (value) => {return value * (3.154 * (10**7))},
            fromBaseUnit: (value) => {return value / (3.154 * (10**7))}
        },
        'decade': {
            toBaseUnit: (value) => {return value * (3.154 * (10**8))},
            fromBaseUnit: (value) => {return value / (3.154 * (10**8))}
        },
        'century': {
            toBaseUnit: (value) => {return value * (3.154 * (10**9))},
            fromBaseUnit: (value) => {return value / (3.154 * (10**9))}
        }
    },

    'volume': {
        'in³': {
            toBaseUnit: (value) => {return value / 61.024},
            fromBaseUnit: (value) => {return value * 61.024}
        },
        'ft³': {
            toBaseUnit: (value) => {return value * 28.317},
            fromBaseUnit: (value) => {return value / 28.317}
        },
        'imp fl oz': {
            toBaseUnit: (value) => {return value / 35.195},
            fromBaseUnit: (value) => {return value * 35.195}
        },
        'us fl oz': {
            toBaseUnit: (value) => {return value / 33.814},
            fromBaseUnit: (value) => {return value * 33.814}
        },
        'imp gal': {
            toBaseUnit: (value) => {return value * 4.546},
            fromBaseUnit: (value) => {return value / 4.546}
        },

        'us gal': {
            toBaseUnit: (value) => {return value * 3.785},
            fromBaseUnit: (value) => {return value / 3.785}
        },

        'ml': {
            toBaseUnit: (value) => {return value / 1000},
            fromBaseUnit: (value) => {return value * 1000}
        },
        'l': {
            toBaseUnit: (value) => {return value},
            fromBaseUnit: (value) => {return value}
        },
        'm³': {
            toBaseUnit: (value) => {return value * 1000},
            fromBaseUnit: (value) => {return value / 1000}
        }
    }

} as {
    [key in UnitConverter.measure]: {
        [key: string]: {
            toBaseUnit: (value:number) => number,
            fromBaseUnit: (value:number) => number
        }
    }
}

export default function operate (
    values:UnitConverter.Values,
    params:UnitConverter.Params
) {
    if (!convertionFormulas[params.measure][params.valueAUnit] || !convertionFormulas[params.measure][params.valueBUnit]) {
        throw new Error(`One or more passed parameters does not exist in the conversion table: {
            measure: ${params.measure},
            valueAUnit: ${params.valueAUnit},
            valueBUnit: ${params.valueBUnit}
        }`)
    }

    console.log(values, params)

    return `${operation(values, params)}`
}
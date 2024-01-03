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
    },

    'area': {
        baseUnit: 'm²',
        ptBr: 'área',
        units: [
            {
                symbol: 'acre',
                ptBr: 'acre',
                en: 'acre'
            },
            {
                symbol: 'ha',
                ptBr: 'hectare',
                en: 'hectare'
            },
            {
                symbol: 'in²',
                ptBr: 'polegada quadrada',
                en: 'square inch'
            },
            {
                symbol: 'ft²',
                ptBr: 'pé quadrado',
                en: 'square foot'
            },
            {
                symbol: 'yd²',
                ptBr: 'jarda quadrada',
                en: 'square yard'
            },
            {
                symbol: 'mi²',
                ptBr: 'milha quadrada',
                en: 'square mile'
            },
            {
                symbol: 'cm²',
                ptBr: 'centímetro quadrado',
                en: 'square centimeter'
            },
            {
                symbol: 'm²',
                ptBr: 'metro quadrado',
                en: 'square meter'
            },
            {
                symbol: 'km²',
                ptBr: 'quilômetro quadrado',
                en: 'square kilometer'
            }
        ]
    },

    'data storage': {
        baseUnit: 'b',
        ptBr: 'armazenamento de dados',
        units: [
            {
                symbol: 'b',
                en: 'byte',
                ptBr: 'byte'
            },
            {
                symbol: 'kb',
                en: 'kilobit',
                ptBr: 'quilobit'
            },
            {
                symbol: 'KB',
                en: 'kilobyte',
                ptBr: 'kilobyte'
            },
            {
                symbol: 'mb',
                en: 'megabit',
                ptBr: 'megabit'
            },
            {
                symbol: 'MB',
                en: 'megabyte',
                ptBr: 'megabyte'
            },
            {
                symbol: 'gb',
                en: 'gigabit',
                ptBr: 'gigabit'
            },
            {
                symbol: 'GB',
                en: 'gigabyte',
                ptBr: 'gigabyte'
            },
            {
                symbol: 'tb',
                en: 'terabit',
                ptBr: 'terabit'
            },
            {
                symbol: 'TB',
                en: 'terabyte',
                ptBr: 'terabyte'
            },
            {
                symbol: 'PB',
                en: 'petabyte',
                ptBr: 'petabyte'
            },
            {
                symbol: 'EB',
                en: 'exabyte',
                ptBr: 'exabyte'
            },
            {
                symbol: 'ZB',
                en: 'zettabyte',
                ptBr: 'zettabyte'
            },
            {
                symbol: 'YB',
                en: 'yottabyte',
                ptBr: 'yottabyte'
            }
        ]
    },

    'data transmission': {
        baseUnit: 'b/s',
        ptBr: 'transmissão de dados',
        units: [
            {
                symbol: 'b/s',
                en: 'bits per second',
                ptBr: 'bits por segundo'
            },
            {
                symbol: 'B/s',
                en: 'bytes per second',
                ptBr: 'bytes por segundo'
            },
            {
                symbol: 'kb/s',
                en: 'kilobits per second',
                ptBr: 'quilobits por segundo'
            },
            {
                symbol: 'KB/s',
                en: 'kilobytes per second',
                ptBr: 'kilobytes por segundo'
            },
            {
                symbol: 'MB/s',
                en: 'megabytes per second',
                ptBr: 'megabytes por segundo'
            },
            {
                symbol: 'gb/s',
                en: 'gigabits per second',
                ptBr: 'gigabits por segundo'
            },
            {
                symbol: 'GB/s',
                en: 'gigabytes per second',
                ptBr: 'gigabytes por segundo'
            },
            {
                symbol: 'tb/s',
                en: 'terabits per second',
                ptBr: 'terabits por segundo'
            },
            {
                symbol: 'TB/s',
                en: 'terabytes per second',
                ptBr: 'terabytes por segundo'
            }
        ]
    },

    'energy': {
        baseUnit: 'J',
        ptBr: 'energia',
        units: [
            {
                symbol: 'J',
                en: 'joule',
                ptBr: 'joule'
            },
            {
                symbol: 'kJ',
                en: 'kilojoule',
                ptBr: 'quilojoule'
            },
            {
                symbol: 'cal',
                en: 'calorie',
                ptBr: 'caloria'
            },
            {
                symbol: 'kcal',
                en: 'kilocalorie',
                ptBr: 'quilocaloria'
            },
            {
                symbol: 'wH',
                en: 'watt-hour',
                ptBr: 'watt-hora',
            },
            {
                symbol: 'kWh',
                en: 'quiowatt-hour',
                ptBr: 'quilowatt-hora'
            }
        ]
    },

    'frequency': {
        baseUnit: 'Hz',
        ptBr: 'frequência',
        units: [
            {
                symbol: 'Hz',
                en: 'hertz',
                ptBr: 'hertz'
            },
            {
                symbol: 'kHz',
                en: 'kilohertz',
                ptBr: 'quilohertz'
            },
            {
                symbol: 'MHz',
                en: 'megahertz',
                ptBr: 'megahertz'
            },
            {
                symbol: 'GHz',
                en: 'gigahertz',
                ptBr: 'gigahertz'
            }
        ]
    },

    'length': {
        baseUnit: 'm',
        ptBr: 'comprimento',
        units: [
            {
                symbol: 'in',
                en: 'inch',
                ptBr: 'polegada'
            },
            {
                symbol: 'ft',
                en: 'foot',
                ptBr: 'pé'
            },
            {
                symbol: 'yd',
                en: 'yard',
                ptBr: 'jarda'
            },
            {
                symbol: 'mi',
                en: 'mile',
                ptBr: 'milha'
            },
            {
                symbol: 'NM',
                en: 'nautic mile',
                ptBr: 'milha náutica'
            },
            {
                symbol: 'nm',
                en: 'nanometer',
                ptBr: 'nanômetro',
            },
            {
                symbol: 'μm',
                en: 'micrometer',
                ptBr: 'micrômetro'
            },
            {
                symbol: 'mm',
                en: 'millimeter',
                ptBr: 'milimetro'
            },
            {
                symbol: 'cm',
                en: 'centimeter',
                ptBr: 'centímetro'
            },
            {
                symbol: 'm',
                en: 'meter',
                ptBr: 'metro'
            },
            {
                symbol: 'km',
                en: 'kilometer',
                ptBr: 'quilômetro'
            }
        ]
    },

    'mass': {
        baseUnit: 'g',
        ptBr: 'massa',
        units: [
            {
                symbol: 'oz',
                en: 'ounce',
                ptBr: 'onça'
            },
            {
                symbol: 'lb',
                en: 'pound',
                ptBr: 'libra'
            },
            {
                symbol: 'μg',
                en: 'microgram',
                ptBr: 'micrograma'
            },
            {
                symbol: 'mg',
                en: 'milligram',
                ptBr: 'miligrama'
            },
            {
                symbol: 'g',
                en: 'gram',
                ptBr: 'grama'
            },
            {
                symbol: 'kg',
                en: 'kilogram',
                ptBr: 'quilograma'
            },
            {
                symbol: 't',
                en: 'ton',
                ptBr: 'tonelada'
            }
        ]
    },

    'pressure': {
        baseUnit: 'Pa',
        ptBr: 'pressão',
        units: [
            {
                symbol: 'Torr',
                en: 'torr',
                ptBr: 'torr'
            },
            {
                symbol: 'psi',
                en: 'pound-force per square inch',
                ptBr: 'libra-força por polegada quadrada'
            },
            {
                symbol: 'Pa',
                en: 'pascal',
                ptBr: 'pascal'
            },
            {
                symbol: 'Bar',
                en: 'bar',
                ptBr: 'bar'
            },
            {
                symbol: 'atm',
                en: 'atmosphere',
                ptBr: 'atmosfera'
            }
        ]
    },

    'speed': {
        baseUnit: 'm/s',
        ptBr: 'velocidade',
        units: [
            {
                symbol: 'kn',
                en: 'knot',
                ptBr: 'nó'
            },
            {
                symbol: 'km/h',
                en: 'kilometers per hour',
                ptBr: 'quilômetros por hora'
            },
            {
                symbol: 'm/s',
                en: 'meters per second',
                ptBr: 'metros por segundo'
            },
            {
                symbol: 'ft/s',
                en: 'feet per second',
                ptBr: 'pés por segundo'
            },
            {
                symbol: 'mi/h',
                en: 'miles per hour',
                ptBr: 'milhas por hora'
            }
        ]
    },

    'temperature': {
        baseUnit: '°C',
        ptBr: 'temperatura',
        units: [
            {
                symbol: '°C',
                en: 'Celsius',
                ptBr: 'graus Celsius'
            },
            {
                symbol: '°F',
                en: 'Fahrenheit',
                ptBr: 'graus Fahrenheit'
            },
            {
                symbol: 'K',
                en: 'Kelvin',
                ptBr: 'graus Kelvin'
            }
        ]
    },

    'time': {
        baseUnit: 's',
        ptBr: 'tempo',
        units:[
            {
                symbol: 's',
                en: 'second',
                ptBr: 'segundo'
            },
            {
                symbol: 'ms',
                en: 'millisecond',
                ptBr: 'milissegundo'
            },
            {
                symbol: 'min',
                en: 'minute',
                ptBr: 'minuto'
            },
            {
                symbol: 'h',
                en: 'hour',
                ptBr: 'hora'
            },
            {
                symbol: 'd',
                en: 'day',
                ptBr: 'dia'
            },
            {
                symbol: 'week',
                en: 'week',
                ptBr: 'semana'
            },
            {
                symbol: 'month',
                en: 'month',
                ptBr: 'mês'
            },
            {
                symbol: 'y',
                en: 'year',
                ptBr: 'ano'
            },
            {
                symbol: 'decade',
                en: 'decade',
                ptBr: 'década'
            },
            {
                symbol: 'century',
                en: 'century',
                ptBr: 'século'
            }
        ]
    },

    'volume': {
        baseUnit: 'l',
        ptBr: 'volume',
        units: [
            {
                symbol: 'in³',
                en: 'cubic inch',
                ptBr: 'polegada cúbica'
            },
            {
                symbol: 'ft³',
                en: 'cubic foot',
                ptBr: 'pé cúbico'
            },
            {
                symbol: 'imp fl oz',
                en: 'imperial fluid ounce',
                ptBr: 'onça fluída imperial'
            },
            {
                symbol: 'us fl oz',
                en: 'american fluid ounce',
                ptBr: 'onça fluída americana'
            },
            {
                symbol: 'imp gal',
                en: 'imperial gallon',
                ptBr: 'galão imperial'
            },
            {
                symbol: 'us gal',
                en: 'american gallon',
                ptBr: 'galão americano'
            },
            {
                symbol: 'ml',
                en: 'milliliter',
                ptBr: 'mililitro'
            },
            {
                symbol: 'l',
                en: 'liter',
                ptBr: 'litro'
            },
            {
                symbol: 'm³',
                en: 'cubic meter',
                ptBr: 'metro cúbico'
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
 * @returns An array containing one measure object for each avaidable measure, with both pt-br and en translations
*/
function getMeasures () {
    return Object.keys(unitsList).map(key => {
        return {
            ptBr: unitsList[key].ptBr,
            en: key
        }
    }).sort() as {
        ptBr: string,
        en: string
    }[]
}

/**
 * @param measure The name from the desired measure
 * @returns An array containing the correspondent units and its properties from the desired measure
*/
function getUnitsFromMeasure (measure: UnitConverter.measure) {
    return unitsList[measure].units.sort()
}

function getBaseUnit (measure: UnitConverter.measure) {
    return unitsList[measure].baseUnit as UnitConverter.unit
}

export default {
    getUnitsList,
    getMeasures,
    getUnitsFromMeasure,
    getBaseUnit
}
declare interface SvgProps {
    maxWidth?: string
    maxHeight?: string
}

declare namespace Page {
    interface WrapperProps {
        children: React.ReactNode
    }

    interface RowProps {
        children: React.ReactNode
        customStyle?: React.CSSProperties
    }

    interface TLinkProps {
        href: string
        image: React.ReactNode
        text: string
    }
}

/**
 * SROT = Simple Rule of Three
*/
declare namespace SROT {
    type values = {
        valueA: string,
        valueB: string,
        valueC: string,
        valueD: string
    } & {[key:string]: string}

    type valueXOwner = 'valueA' | 'valueB' | 'valueC' | 'valueD'

    type proportionality = 'directly' | 'inversely'

    interface InputProps {
        name: 'valueA' | 'valueB' | 'valueC' | 'valueD',
        state: string,
        setState: React.Dispatch<React.SetStateAction<SROT.values>>,
        valueX: string,
        valueXOwner: SROT.valueXOwner
        setValueXOwner: React.Dispatch<React.SetStateAction<SROT.valueXOwner>>,
        direction?: 'normal' | 'reverse'
    }

    interface ProportionalityProps {
        state: SROT.proportionality
        setState: React.Dispatch<React.SetStateAction<SROT.proportionality>>
    }
}


declare namespace TimeDifference {
    
    type Values = {
        inputA: {
            time: string,
            date: string,
        }
        inputB: {
            time: string,
            date: string
        }
    } & {[key:string]: {time: string, date: string}}

    type Results = {
        timeDifference: string,
        dateDifference: string
    }

    type Intermediary = {
        time: string,
        date: string
    }

    type InputName = 'inputA' | 'inputB'

    type InputType = 'time' | 'date'

    type timeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'full'

    type dateUnit = 'day' | 'week' | 'month' | 'year' | 'full'

    type Params = {
        diffBetween: InputType
        timeResultIn: timeUnit
        dateResultIn: dateUnit
    }

    interface InputProps {
        type: InputType
        name: InputName
        state: Values
        setState: React.Dispatch<React.SetStateAction<Values>>
    }

    interface InputResultProps {
        placeholder: string,
        params: Params,
        state: Results,
        setState: React.Dispatch<React.SetStateAction<Params>>
    }

    interface SwitchButtonProps {
        values: Values
        params: Params
        setState: React.Dispatch<React.SetStateAction<Intermediary>>
    }
}

declare namespace UnitConverter {

    type inputName = 'valueA' | 'valueB'
    
    type measure = 'angle' | 'area' | 'data storage' | 'data transmission' | 'energy' | 'frequency' | 'length' | 'mass' | 'pressure' | 'speed' | 'temperature' | 'time' | 'volume'

    type Units = {
        'angle': 'arcsec' | 'rad' | 'arcmin' | '°' | 'gon';

        'area': 'acre' | 'ha' | 'in²' | 'ft²' | 'yd²' | 'mi²' | 'cm²' | 'm²' | 'km²';

        'data storage': 'b' | 'B' | 'kb' | 'KB' | 'mb' | 'MB' | 'gb' | 'GB' | 'tb' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB';

        'data transmission': 'b/s' | 'B/s' | 'kb/s' | 'KB/s' | 'mb/s' | 'MB/s' | 'gb/s' | 'GB/s' | 'tb/s' | 'TB/s';

        'energy': 'cal' | 'kcal' | 'J' | 'kJ' | 'Wh' | 'kWh';

        'frequency': 'Hz' | 'kHz' | 'MHz' | 'GHz';

        'length': 'in' | 'ft' | 'yd' | 'mi' | 'NM' | 'nm' | 'μm' | 'mm' | 'cm' | 'm' | 'km';

        'mass': 'oz' | 'lb' | 'μg' | 'mg' | 'g' | 'kg' | 't';

        'pressure': 'torr' | 'psi' | 'Pa' | 'bar' | 'atm';

        'speed': 'kn' | 'km/h' | 'm/s' | 'ft/s' | 'mi/h';

        'temperature': '°C' | '°F' | 'K';

        'time': 'ms' | 's' | 'min' | 'h' | 'd' | 'week' | 'month' | 'y' | 'decade' | 'century';

        'volume': 'in³' | 'ft³' | 'imp fl oz' | 'us fl oz' | 'imp gal' | 'us gal' | 'ml' | 'l' | 'm³';
    }

    type unit = Units[measure]

    type UnitObject = {
        symbol: unit
        en: string
        ptBr: string
    }

    type Values = {
        valueA: string
        valueB: string
    }

    type Intermediary = {
        valueB: string
        valueBUnit: unit | ''
    } & {[key:string]: string}

    type Params = {
        valueAUnit: Units[measure]
        valueBUnit: Units[measure]
        measure: measure
    } & {[key:string]: any}

    interface InputProps {
        name: inputName
        state: Values
        setState: React.Dispatch<React.SetStateAction<Values>>
        params: Params
        setParams: React.Dispatch<React.SetStateAction<Params>>
        currentUnits: UnitObject[] 
        direction?: 'normal' | 'reverse'
        disabled?: boolean
    }

    interface UnitSelectionProps {
        inputName: inputName
        params: Params
        setParams: React.Dispatch<React.SetStateAction<Params>>
        currentUnits: UnitObject[]
    }

    interface MeasureMenuProps {
        state: Params
        setState: React.Dispatch<React.SetStateAction<Params>>
        measures: {
            ptBr: string,
            en: string
        }[]
    }

    interface SwitchButtonProps {
        values: Values
        params: Params
        setState: React.Dispatch<React.SetStateAction<Intermediary>>
    }
}
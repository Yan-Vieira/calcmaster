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
    
    type measure = 'angle'

    type Units = {
        angle: 'arcsec' | 'rad' | 'arcmin' | '°' | 'gon';
    }

    type unit<T extends measure> = Units[T]

    type UnitObject = {
        symbol: string
        en: string
        ptBr: string
    }

    type Values = {
        valueA: string
        valueB: string
    }

    type Intermediary = {
        valueB: string
        valueBUnit: unit<measure> | ''
    } & {[key:string]: string}

    type Params<T extends measure> = {
        valueAUnit: Units[T]
        valueBUnit: Units[T]
        unitType: T
    } & {[key:string]: any}

    interface InputProps {
        name: inputName
        state: Values
        setState: React.Dispatch<React.SetStateAction<Values>>
        params: Params<measure>
        setParams: React.Dispatch<React.SetStateAction<Params<measure>>>
        currentUnits: UnitObject[] 
        direction?: 'normal' | 'reverse'
        disabled?: boolean
    }

    interface UnitSelectionProps {
        inputName: inputName
        params: Params<measure>
        setParams: React.Dispatch<React.SetStateAction<Params<measure>>>
        currentUnits: UnitObject[]
    }

    interface UnitTypeMenuProps {
        state: Params<measure>
        setState: React.Dispatch<React.SetStateAction<Params<measure>>>
        measures: measure[]
    }

    interface SwitchButtonProps {
        values: Values
        params: Params<measure>
        setState: React.Dispatch<React.SetStateAction<Intermediary>>
    }
}
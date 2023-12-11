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
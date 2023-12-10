declare interface SvgProps {
    maxWidth?: string
    maxHeight?: string
}

declare namespace SROT {
    type values = {
        valueA: string,
        valueB: string,
        valueC: string,
        valueD: string
    }

    type valueXOwner = 'valueA' | 'valueB' | 'valueC' | 'valueD'

    type proportionality = 'directly' | 'indirectly'
}
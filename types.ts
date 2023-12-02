declare interface SvgProps {
    maxWidth?: string
    maxHeight?: string
}

declare type CalculatorKey = {
        value: string;
        type: 'number' | 'operator' | 'complexOperator' | 'function';
}

declare type KeyHandlers = {
    [key: string]: (value:string) => void | (() => void);
}
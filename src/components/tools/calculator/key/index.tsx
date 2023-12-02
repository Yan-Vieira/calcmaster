import styles from './Key.module.css'

interface CalculatorKeyProps {
    value: string;
    type: string;
    onClick: (value: string) => void | (() => void);
}

export default function Key ({ value, type, onClick }:CalculatorKeyProps) {
    return (
        <input
            className={`${styles.button} ${styles[type]}`}
            type="button"
            value={value}
            onClick={() => onClick(value)}
        />
    )
}
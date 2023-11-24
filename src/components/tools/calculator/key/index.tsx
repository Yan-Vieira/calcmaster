import styles from './Key.module.css'

interface CalculatorKeyProps {
    value: string;
    onClick: (value: string) => void;
}

export default function Key ({ value, onClick }:CalculatorKeyProps) {
    return (
        <input
            className={styles.button}
            type="button"
            value={value}
            onClick={() => onClick(value)}
        />
    )
}
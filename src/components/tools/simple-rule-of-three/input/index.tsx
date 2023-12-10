import { SetStateAction } from "react"

import styles from "./Input.module.css"

import useWindowWidth from "@hooks/useWindowWidth"

interface SROTInputProps {
    name: 'valueA' | 'valueB' | 'valueC' | 'valueD',
    state: string,
    setState: React.Dispatch<SetStateAction<SROT.values>>,
    valueX: string,
    valueXOwner: SROT.valueXOwner
    setValueXOwner: React.Dispatch<SetStateAction<SROT.valueXOwner>>,
    direction?: 'normal' | 'reverse'
}

const respectivePlaceholders = {
    'valueA': 'A',
    'valueB': 'B',
    'valueC': 'C',
    'valueD': 'D'
} as {[key: string]: string}

export default function Input ({ name, state, setState, valueX, valueXOwner, setValueXOwner, direction = 'normal' }:SROTInputProps) {

    const currentWindowWidth = useWindowWidth()

    return (
        <div className={styles.wrapper}>
            {(direction === 'normal' || currentWindowWidth <= 700) && (
                <button
                    className={styles.button}
                    onClick={() => setValueXOwner(name)}
                    disabled={valueXOwner === name ? true : false}
                >
                    Colocar valor X aqui
                </button>
            )}

            <input
                className={styles.input}
                type="number"
                placeholder={valueXOwner === name ? 'X' : respectivePlaceholders[name]}
                value={valueXOwner === name ? valueX : state}
                onChange={
                    (e) => setState(state => ({
                        ...state,
                        [name]: e.target.value
                    }))
                }
                onFocus={(e) => e.target.placeholder = ''}
                onBlur={(e) => e.target.placeholder = respectivePlaceholders[name]}
                disabled={valueXOwner === name ? true : false}
            />

            {direction === 'reverse' && currentWindowWidth > 700 && (
                <button
                    className={styles.button}
                    onClick={() => setValueXOwner(name)}
                    disabled={valueXOwner === name ? true : false}
                >
                    Colocar valor X aqui
                </button>
            )}
        </div>
    )
}
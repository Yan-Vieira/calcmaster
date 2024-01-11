import styles from './Input.module.css'

import CurrencySelection from './currency-selection'

import useWindowWidth from '@hooks/useWindowWidth'

export default function Input ({ name, disabled = false, state, setState, params, setParams, direction = 'normal' }:CurrencyConverter.InputProps) {

    const windowWidth = useWindowWidth()

    return (
        <div className={styles.wrapper}>

            {(direction === 'normal' || windowWidth <= 800) && (
                <CurrencySelection
                    inputName={name}
                />
            )}

            <label>{name}</label>

            <input
                type='number'
                disabled={disabled}
                value={state[name]}
                
                onChange={(e) => setState(state => ({
                    ...state,
                    [name]: e.target.value
                }))}
            />
        </div>
    )
}
import styles from './Input.module.css'

import UnitSelection from './unit-selection'

import useWindowWidth from '@/hooks/useWindowWidth'

export default function Input ({ name, state, setState, params, setParams, currentUnits, direction = 'normal', disabled = false }:UnitConverter.InputProps) {

    const currentWindowWidth = useWindowWidth()

    return (
        <div className={styles.wrapper}>
            {(direction === 'normal' || currentWindowWidth <= 800) && (
                <UnitSelection
                    inputName={name}
                    params={params}
                    setParams={setParams}
                    currentUnits={currentUnits}
                />
            )}
            
            <input
                type='number'
                value={state[name]}
                placeholder={params[`${name}Unit`]}
                onChange={(e) => setState(state => ({
                    ...state,
                    [name]: e.target.value
                }))}
                disabled={disabled}
            />

            {direction === 'reverse' && currentWindowWidth > 800 && (
                <UnitSelection
                    inputName={name}
                    params={params}
                    setParams={setParams}
                    currentUnits={currentUnits}
                />
            )}
        </div>
    )
}
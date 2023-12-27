import styles from './SwitchButton.module.css'
import { GoArrowSwitch } from 'react-icons/go'

export default function SwitchButton ({ values, params, setState }:UnitConverter.SwitchButtonProps) {
    
    return (
        <button
        className={styles.button}
            onClick={() => setState({
                valueB: values.valueB,
                valueBUnit: params.valueBUnit,
            })}
        >
            <GoArrowSwitch />
        </button>
    )
}
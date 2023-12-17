import styles from './SwitchButton.module.css'

import { GoArrowSwitch } from 'react-icons/go'

export default function SwitchButton ({ values, params, setState }:TimeDifference.SwitchButtonProps) {
    return (
        <button
        className={styles.button}
            onClick={() => setState(state => ({
                ...state,
                [params.diffBetween]: values.inputB[params.diffBetween]
            }))}
        >
            <GoArrowSwitch />
        </button>
    )
}
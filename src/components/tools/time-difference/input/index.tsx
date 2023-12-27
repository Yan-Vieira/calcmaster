import styles from './Input.module.css'

const respectiveLabels = {
    'inputA': {
        'time': 'hora inicial',
        'date': 'data inicial'
    },
    'inputB': {
        'time': 'hora final',
        'date': 'data final'
    }
} as {[key in TimeDifference.InputName]: {[key in TimeDifference.InputType]: string}}

export default function Input ({ type, name, state, setState }:TimeDifference.InputProps) {

    return (
        <div className={styles.wrapper}>
            <label>
                {respectiveLabels[name][type]}
            </label>
            <input
                type={type}
                value={state[name][type]}
                onChange={(e) => {
                    setState(state => ({
                        ...state,
                        [name]: {
                            ...state[name],
                            [type]: e.target.value                            
                        }
                    }))
                }}
            />
        </div>
    )
}
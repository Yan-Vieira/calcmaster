import styles from './Input.module.css'

const respectivePlaceholders = {
    'startDate': 'data inicial',
    'endDate': 'data final',
    'startTime': 'horário inicial',
    'endTime': 'horário final'
} as {[key in TimeDifference.ValueNames]: string}

export default function Input ({ type, name, state, setState }:TimeDifference.InputProps) {

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type={type}
                placeholder={respectivePlaceholders[name]}
                value={state}
                onChange={(e) => {
                    setState(state => ({
                        ...state,
                        [name]: e.target.value
                    }))
                }}
            />
        </div>
    )
}
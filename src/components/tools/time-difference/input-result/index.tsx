import styles from './InputResult.module.css'

const respectiveResultIn = {
    time: {
        'full': 'horas e minutos',
        'hour': 'horas',
        'minute': 'minutos',
        'second': 'segundos'
    },
    date: {
        'full': 'dias, meses e anos',
        'year': 'anos',
        'month': 'meses',
        'day': 'dias'
    }
} as {
    time: {
        [key in TimeDifference.timeUnit]: string
    } & {[key:string]: string}
    date: {
        [key in TimeDifference.dateUnit]: string
    } & {[key:string]: string}
}

export default function InputResult ({ placeholder, params }:TimeDifference.InputResultProps) {

    return (
        <div className={styles.wrapper}>
            <input
                type='text'
                placeholder={placeholder}
                disabled
            />

            <label>Resultado em:</label>
            <select>
            {params.diffBetween === 'time' && (
                    Object.keys(respectiveResultIn.time).map(key => (
                        <option
                            key={`DiffTDToll${key}`}
                            value={respectiveResultIn.time[key]}
                        >
                            {respectiveResultIn.time[key]}
                        </option>
                    ))
                )}
            </select>
        </div>
    )
}
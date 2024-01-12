import styles from './InputResult.module.css'

const respectiveDifferenceBetween = {
    'time': 'horários',
    'date': 'datas'
}

const respectiveResultIn = {
    time: {
        'full': 'horas e minutos',
        'hour': 'horas',
        'minute': 'minutos',
        'second': 'segundos',
        'millisecond': 'milissegundos'
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

export default function InputResult ({ placeholder, params, state, setState }:TimeDifference.InputResultProps) {

    return (
        <div className={styles.wrapper}>
            <input
                type='text'
                placeholder={placeholder}
                value={params.diffBetween === 'time' ? state.timeDifference : state.dateDifference}
                disabled
            />

            <button
                onClick={() => setState(state => ({
                    ...state,
                    diffBetween: params.diffBetween === 'time' ? 'date' : 'time'
                }))}
            >Diferença entre: {respectiveDifferenceBetween[params.diffBetween]}</button>

            <label htmlFor="resultIn">Resultado em:</label>
            <select
                id="resultIn"

                onChange={(e) => setState(state => ({
                    ...state,
                    [`${params.diffBetween}ResultIn`]: e.target.value
                }))}
            >
            {params.diffBetween === 'time' && (
                    Object.keys(respectiveResultIn.time).map(key => (
                        <option
                            key={`DiffTDTool${key}`}
                            value={key}
                        >
                            {respectiveResultIn.time[key]}
                        </option>
                    ))
                )
            }

            {params.diffBetween === 'date' && (
                Object.keys(respectiveResultIn.date).map(key => (
                    <option
                        key={`DiffTDTool${key}`}
                        value={key}
                    >
                        {respectiveResultIn.date[key]}
                    </option>
                ))
            )}
            </select>
        </div>
    )
}
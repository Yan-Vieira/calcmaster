import styles from './RoundingInput.module.css'

export default function RoundingInput ({ params, setParams }:UnitConverter.RoundingInputProps) {

    return (
        <div className={styles.wrapper}>
            <label>Arredondamento:</label>
            
            <input
                type='text'

                defaultValue={params.rounding === 0 ? 'auto' : `${params.rounding}`}

                onChange={(e) => {
                    let value = e.target.value === 'auto' ? 0 : Number(e.target.value)

                    value < 1 ? value = 0 : null
                    value > 9 ? value = 9 : null
                    
                    setParams(state => ({
                        ...state,
                        rounding: value
                    }
                ))}}

                onFocus={(e) => {
                    e.target.type = 'number'

                    e.target.value = `${params.rounding}`
                }}

                onBlur={(e) => {
                    e.target.type = 'text'

                    e.target.value = params.rounding === 0 ? 'auto' : `${params.rounding}`
                }}
            />
        </div>
    )
}
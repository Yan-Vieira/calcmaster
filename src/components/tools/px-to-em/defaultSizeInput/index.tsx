import styles from './DefaultSizeInput.module.css'

export default function DefaultSizeInput ({ state, setState }:PxToEmConverter.DefaultSizeInputProps) {

    return (
        <div className={styles.wrapper}>
            <label>
                Tamanho padrão da fonte (em pixels):
            </label>

            <input
                type="number"
                value={state}
                onChange={(e) => {
                    setState(e.target.value)
                }}
            />
        </div>
    )
}
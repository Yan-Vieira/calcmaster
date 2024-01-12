import styles from './DefaultSizeInput.module.css'

export default function DefaultSizeInput ({ state, setState }:PxToEmConverter.DefaultSizeInputProps) {

    return (
        <div className={styles.wrapper}>
            <label htmlFor="defaultSizeInput">
                Tamanho padrão da fonte (em pixels):
            </label>

            <input
                id="defaultSizeInput"
                type="number"
                value={state}
                onChange={(e) => {
                    setState(e.target.value)
                }}
            />
        </div>
    )
}
import styles from './UnitSelection.module.css'

export default function UnitSelection ({ inputName, params, setParams, currentUnits }:UnitConverter.UnitSelectionProps) {
    return (
        <select
            className={styles.selection}
            value={params[`${inputName}Unit`]}
            onChange={(e) => setParams(state => ({
                ...state,
                [`${inputName}Unit`]: e.target.value
            }))}
        >
            {currentUnits.map(unit => (
                <option
                    key={`UnitCTool${unit.en}`}
                    value={unit.symbol}
                >
                    {unit.ptBr} ({unit.symbol})
                </option>
            ))}
        </select>
    )
}

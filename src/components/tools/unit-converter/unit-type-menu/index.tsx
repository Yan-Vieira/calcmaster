import styles from './UnitTypeMenu.module.css'

export default function UnitTypeMenu ({ state, setState, measures }:UnitConverter.UnitTypeMenuProps) {

    return (
        <select
            className={styles.select}
            value={state.unitType}
            onChange={(e) => setState(state => ({
                ...state,
                unitType: e.target.value as UnitConverter.measure
            }))}
        >
            {measures.map(measure => (
                <option
                    key={`UnitCTool${measure}`}
                    value={measure}
                >
                    {measure}
                </option>
            ))}
        </select>
    )
}
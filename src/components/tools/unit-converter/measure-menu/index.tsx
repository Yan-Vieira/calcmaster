import styles from './MeasureMenu.module.css'

import unitsList from "@/calc-handlers/unit-converter/unitsList"

export default function MeasureMenu ({ state, setState, measures }:UnitConverter.MeasureMenuProps) {

    return (
        <select
            className={styles.select}
            value={state.unitType}
            onChange={(e) => {
                const newValue = e.target.value as UnitConverter.measure

                setState(state => ({
                    ...state,

                    valueAUnit: unitsList.getBaseUnit(newValue),

                    valueBUnit: unitsList.getUnitsFromMeasure(newValue)[1].symbol as UnitConverter.unit,

                    measure: e.target.value as UnitConverter.measure
                }))
            }}
        >
            {measures.map(measure => (
                <option
                    key={`UnitCTool${measure.en}`}
                    value={measure.en}
                >
                    {measure.ptBr}
                </option>
            ))}
        </select>
    )
}
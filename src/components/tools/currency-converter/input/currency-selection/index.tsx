import styles from './CurrencySelection.module.css'

export default function CurrencySelection ({ inputName, params, setParams, currentCurrencies }:CurrencyConverter.CurrencySelectionProps) {
    return (
        <select
            className={styles.selection}
            value={params[`${inputName}Currency`]}
            onChange={(e) => setParams(state => ({
                ...state,
                [`${inputName}Unit`]: e.target.value
            }))}
        >
            {currentCurrencies.map(currency => (
                <option
                    key={`CurrencyCTool${currency.en}`}
                    value={currency.symbol}
                >
                    {currency.ptBr} ({currency.symbol})
                </option>
            ))}
        </select>
    )
}
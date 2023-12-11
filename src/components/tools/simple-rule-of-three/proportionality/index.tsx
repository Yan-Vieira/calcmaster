import styles from './Proportionality.module.css'

const cases = {
    'directly': 'direta',
    'inversely': 'inversa'
} as {[key in SROT.proportionality]: string}

export default function Proportionality ({ state, setState }:SROT.ProportionalityProps) {

    return (
        <button
            className={styles.button}
            onClick={() => setState(state => state === 'directly' ? 'inversely' : 'directly')}
        >
            Proporcionalidade: {cases[state]}
        </button>
    )
}
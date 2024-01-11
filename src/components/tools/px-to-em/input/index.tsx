import styles from './Input.module.css'

export default function Input ({ name, state, setState }:PxToEmConverter.InputProps) {

    return (
        <div className={styles.wrapper}>
            <label>{name === 'pxInput' ? 'px' : 'em'}</label>

            <input
                type='number'
                value={state[name === 'pxInput' ? 'px' : 'em']}
                placeholder={name === 'pxInput' ? 'px' : 'em'}

                onChange={(e) => setState(state => ({
                    ...state,
                    [name === 'pxInput' ? 'px' : 'em']: e.target.value
                }))}
            />
        </div>
    )
}
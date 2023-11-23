import styles from './Row.module.css'

export default function Row ({ children, customStyle }:{ children: React.ReactNode, customStyle?: React.CSSProperties }) {
    return (
        <div className={styles.row} style={customStyle}>
            {children}
        </div>
    )
}
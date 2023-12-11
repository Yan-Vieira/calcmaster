import styles from './Row.module.css'

export default function Row ({ children, customStyle }:Page.RowProps) {
    return (
        <div className={styles.row} style={customStyle}>
            {children}
        </div>
    )
}
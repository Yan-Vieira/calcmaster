import styles from './Row.module.css'

interface PageRowProps {
    children: React.ReactNode
    customStyle?: React.CSSProperties
}

export default function Row ({ children, customStyle }:PageRowProps) {
    return (
        <div className={styles.row} style={customStyle}>
            {children}
        </div>
    )
}
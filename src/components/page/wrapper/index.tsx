import styles from './Wrapper.module.css'

export default function Wrapper ({ children }:{ children: React.ReactNode }) {
    return (
        <section className={styles.page}>
            {children}
        </section>
    )
}
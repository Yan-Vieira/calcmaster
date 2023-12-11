import styles from './Wrapper.module.css'



export default function Wrapper ({ children }:Page.WrapperProps) {
    return (
        <section className={styles.page}>
            {children}
        </section>
    )
}
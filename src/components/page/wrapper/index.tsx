import styles from './Wrapper.module.css'

interface PageWrapperProps {
    children: React.ReactNode
}

export default function Wrapper ({ children }:PageWrapperProps) {
    return (
        <section className={styles.page}>
            {children}
        </section>
    )
}
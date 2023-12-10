import styles from './Footer.module.css'

import { FaGithub } from 'react-icons/fa'

export default function Footer () {
    return (
        <footer className={styles.footer}>

            <p>
                Criado por <a href="https://github.com/Yan-Vieira" rel="noreferrer noopener" style={{color: 'var(--col_5)'}}>Yan Vieira</a>
            </p>

            <a className={styles.link} href='https://github.com/Yan-Vieira/calcmaster' target='_blank' rel='noreferrer noopener'><FaGithub /></a>
        </footer>
    )
}
'use client'

import styles from './AppTitle.module.css'

import useWindowWidth from '@/hooks/useWindowWidth'

import Link from 'next/link'
import Logo from '@assets/Logo'
import Title from '@assets/Title'

export default function AppTitle () {
    const currentWindowWidth = useWindowWidth()

    return (
        <Link className={styles.appTitle} href="/">
            {currentWindowWidth <= 1000 && (
                <Logo />
            )}
            {currentWindowWidth > 1000 && (
                <Title />
            )}
        </Link>
    )
}
'use client'

import styles from './AppTitle.module.css'

import useWindowWidth from '@/hooks/useWindowWidth'

import Link from 'next/link'
import Logo from '@assets/Logo'

export default function AppTitle () {

    return (
        <Link className={styles.appTitle} href="/">
            <Logo />
        </Link>
    )
}
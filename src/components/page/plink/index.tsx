import styles from './PLink.module.css'

import Link from "next/link"

interface PLinkProps {
    children: React.ReactNode;
    href: string;
}

export default function PLink ({ children, href }:PLinkProps) {
    return (
        <Link className={styles.plink} href={href}>
            {children}
        </Link>
    )
}
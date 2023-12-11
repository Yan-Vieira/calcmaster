import styles from './TLink.module.css'

import Link from "next/link"
import Page from "@components/page"

interface TLinkProps {
    href: string
    image: React.ReactNode
    text: string
}

export default function TLink ({ href, image, text }:TLinkProps) {
    return (
        <Link className={styles.tlink} href={href}>
            <Page.Row>
                {image}
            </Page.Row>

            <Page.Row>
                {text}
            </Page.Row>
        </Link>
    )
}
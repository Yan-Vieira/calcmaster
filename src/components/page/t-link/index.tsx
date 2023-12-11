import styles from './TLink.module.css'

import Link from "next/link"
import Page from "@components/page"

export default function TLink ({ href, image, text }:Page.TLinkProps) {
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
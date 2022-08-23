import React from 'react'
import { BlobOutlineShape, BlobShape } from './assets'

import * as styles from './styles'

export default function AboutSection() {
    return (
        <section className={styles.sAbout} id='about-us'>
            <BlobShape className={styles.sFloatBlobShape} />
            <BlobOutlineShape className={styles.sFloatBlobOutlineShape} />
            <div className={styles.sAboutContent}>
                <h4 className={styles.sAboutTitle}>
                    About us{'\n'}
                    <span className={styles.sAboutTitleSpan}>TrustCo</span>
                </h4>
                <p className={styles.sAboutDescription}>
                    TrustCo is a creative technology company based in Bandung,
                    Indonesia. Our team consists of people who are very
                    experienced and passionate in providing the best solutions
                    for clients.
                </p>
            </div>
        </section>
    )
}

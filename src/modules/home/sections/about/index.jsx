import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BlobOutlineShape, BlobShape } from './assets'

import * as styles from './styles'

export default function AboutSection() {
    const aboutRef = useRef(null)
    const isInView = useInView(aboutRef)

    const animateSection = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeOut',
                duration: 3,
            },
        },
    }

    return (
        <motion.section
            ref={aboutRef}
            initial={!isInView ? 'hidden' : ''}
            animate={isInView ? 'visible' : ''}
            variants={animateSection}
            className={styles.sAbout}
            id='about-us'
        >
            <BlobShape className={styles.sFloatBlobShape} />
            <BlobOutlineShape className={styles.sFloatBlobOutlineShape} />
            <div className={styles.sAboutContent}>
                <h4 className={styles.sAboutTitle}>
                    About us{'\n'}
                    <span className={styles.sAboutTitleSpan}>TrustcoTech</span>
                </h4>
                <p className={styles.sAboutDescription}>
                    TrustcoTech is a creative technology company based in
                    Bandung, Indonesia. Our team consists of people who are very
                    experienced and passionate in providing the best solutions
                    for clients.
                </p>
            </div>
        </motion.section>
    )
}

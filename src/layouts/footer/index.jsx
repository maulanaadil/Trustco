import { Brand } from '@components'
import React from 'react'

import * as styles from './styles'

export default function Footer() {
    return (
        <footer className={styles.sFooter}>
            <div className={styles.sFooterContainer}>
                <div className={styles.sFooterContentWrapper}>
                    <Brand className={styles.sFooterlogo} />
                </div>
                <div className={styles.sFooterContentWrapper}>
                    <h6 className={styles.sFooterTitleItem}>Location</h6>
                    <p className={styles.sFooterItem}>
                        Bandung, Jawa Barat Indonesia
                    </p>
                </div>
                <div className={styles.sFooterContentWrapper}>
                    <h6 className={styles.sFooterTitleItem}>Get in Touch</h6>
                    <a href='#'>
                        <p className={styles.sFooterItem}>+62 82218081639</p>
                    </a>
                    <a href='#'>
                        <p className={styles.sFooterItem}>
                            rifki@virtuepictures.com
                        </p>
                    </a>
                </div>
                <div className={styles.sFooterContentWrapper}>
                    <h6 className={styles.sFooterTitleItem}>Our Work</h6>
                    <a href='#'>
                        <p className={styles.sFooterItem}>Medium</p>
                    </a>
                    <a href='#'>
                        <p className={styles.sFooterItem}>Dribbles</p>
                    </a>
                    <a href='#'>
                        <p className={styles.sFooterItem}>Behance</p>
                    </a>
                    <a href='#'>
                        <p className={styles.sFooterItem}>Instagram</p>
                    </a>
                    <a href='#'>
                        <p className={styles.sFooterItem}>Github</p>
                    </a>
                </div>
                <div className={styles.sFooterSiteMap}>
                    <hr className={styles.sFooterDivider} />
                    <div className={styles.sFooterSiteMapWrapper}>
                        <p className={styles.sFooterCopyright}>
                            © 2022 Copyright TrustCo.
                        </p>
                        <div className={styles.sFooterSiteMapItemWrapper}>
                            <a href='#' className={styles.sFooterSiteMapItem}>
                                Home
                            </a>
                            <a href='#' className={styles.sFooterSiteMapItem}>
                                About us
                            </a>
                            <a href='#' className={styles.sFooterSiteMapItem}>
                                Projects
                            </a>
                            <a href='#' className={styles.sFooterSiteMapItem}>
                                Contacts
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

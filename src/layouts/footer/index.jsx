import { Brand } from '@components'
import React from 'react'

import * as styles from './styles'

export default function Footer() {
    return (
        <footer className={styles.sFooter} id='footer'>
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
                    <a href='https://wa.me/+6282218081639'>
                        <p className={styles.sFooterItem}>+62 82218081639</p>
                    </a>
                    <a href='mailto: rifki@trustcotech.my.id'>
                        <p className={styles.sFooterItem}>
                            rifki@trustcotech.my.id
                        </p>
                    </a>
                    <a href='mailto: maulana@trustcotech.my.id'>
                        <p className={styles.sFooterItem}>
                            maulana@trustcotech.my.id
                        </p>
                    </a>
                </div>
                <div className={styles.sFooterContentWrapper}>
                    <h6 className={styles.sFooterTitleItem}>Our Work</h6>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                        <p className={styles.sFooterItem}>Medium</p>
                    </a>
                    <a
                        href='https://dribbble.com/maulanaadill'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <p className={styles.sFooterItem}>Dribbles</p>
                    </a>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                        <p className={styles.sFooterItem}>Behance</p>
                    </a>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                        <p className={styles.sFooterItem}>Instagram</p>
                    </a>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
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
                            <a
                                href='#home'
                                className={styles.sFooterSiteMapItem}
                            >
                                Home
                            </a>
                            <a
                                href='#about-us'
                                className={styles.sFooterSiteMapItem}
                            >
                                About us
                            </a>
                            <a
                                href='#projects'
                                className={styles.sFooterSiteMapItem}
                            >
                                Projects
                            </a>
                            <a
                                href='#contacs'
                                className={styles.sFooterSiteMapItem}
                            >
                                Contacts
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

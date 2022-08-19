import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './styles'
import { clientItem } from './models'

function ClientLogo({ src, alt }) {
    return (
        <div className={styles.sClientLogoWrapper}>
            <img src={src} alt={alt} className={styles.sClientLogo} />
        </div>
    )
}

export default function ClientSection() {
    return (
        <section className={styles.sClient}>
            <div className={styles.sClientWrapper}>
                {clientItem.slice(0, 8).map((item, index) => (
                    <ClientLogo src={item.logo} alt={item.alt} key={index} />
                ))}
            </div>
        </section>
    )
}

ClientLogo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

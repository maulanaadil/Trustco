import React from 'react'

import { Logo } from '@assets'

import * as styles from './styles'

export default function Brand() {
    return (
        <div className={styles.sBrand}>
            <Logo className={styles.sBrandLogo} />
            <h6 className={styles.sBrandLogoText}>TrustCo</h6>
        </div>
    )
}

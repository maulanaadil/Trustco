import { Button } from '@components'
import React from 'react'

import * as styles from './styles'

export default function IntrestedSection() {
    return (
        <div className={styles.sIntrested}>
            <div className={styles.sIntrestedContent}>
                <h4 className={styles.sIntrestedTitle}>
                    Interested to work with us? lets collaborate to build your{' '}
                    <br />
                    imagination come true.
                </h4>
                <Button
                    size='large'
                    variant='secondary'
                    type='button'
                    onClick={() => {}}
                >
                    Start a Project
                </Button>
            </div>
        </div>
    )
}

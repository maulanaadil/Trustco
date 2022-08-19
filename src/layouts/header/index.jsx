import React from 'react'

import { Brand, Button } from '@components'

import * as styles from './styles'
import { navItem } from './models'
import NavItem from './components/navitem'

export default function Header() {
    return (
        <nav className={styles.sHeader}>
            <Brand />
            <div className={styles.sWrapperNavItem}>
                {navItem.map((item) => (
                    <NavItem key={item.name} link={item.to}>
                        {item.name}
                    </NavItem>
                ))}
            </div>
            <Button
                size='normal'
                variant='primary'
                type='button'
                onClick={() => {}}
            >
                Reach us
            </Button>
        </nav>
    )
}

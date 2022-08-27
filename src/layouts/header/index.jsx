import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Brand, Button } from '@components'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import * as styles from './styles'
import { navItem } from './models'
import NavItem from './components/navitem'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleClickClose = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={styles.sHeader}>
            <div className={styles.smHeaderWrapper}>
                <Brand />
                <div className={styles.smHeaderContainerButtonOpen}>
                    <button
                        onClick={handleClickOpen}
                        className={styles.smHeaderButton}
                    >
                        <span className={styles.smSrOnly}>Open menu</span>
                        <Bars3Icon
                            className={styles.smIconBar}
                            aria-hidden='true'
                        />
                    </button>
                </div>
            </div>
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
                className={styles.sButtonHeader}
                onClick={() => {}}
            >
                Reach us
            </Button>
            {isOpen && (
                <motion.div className={styles.smHeaderContainer}>
                    <div className={styles.smHeaderResponsiveWrapper}>
                        <div className={styles.smHeaderButtonCloseWrapper}>
                            <button
                                onClick={handleClickClose}
                                className={styles.smHeaderButton}
                            >
                                <span className={styles.smSrOnly}>
                                    Open menu
                                </span>
                                <XMarkIcon
                                    className={styles.smIconXMark}
                                    aria-hidden='true'
                                />
                            </button>
                        </div>
                        {navItem.map((item) => (
                            <NavItem
                                key={item.name}
                                link={item.to}
                                onClick={handleClickClose}
                                className='mt-[16px] hover:text-secondary-onyx'
                            >
                                {item.name}
                            </NavItem>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    )
}

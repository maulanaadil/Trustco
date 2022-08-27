import { Button } from '@components'
import React from 'react'
import {
    ChatDevelopmentShape,
    DesignPillShape,
    DotShape,
    HalfEllipseShape,
    LeftSideLine,
    PillShape,
    PolygonShape,
    RightSideLine,
    SquareShape,
    TestingEllipseShape,
} from './assets'

import { motion } from 'framer-motion'

import * as animation from './animation'
import * as styles from './styles'

export default function HeroSection() {
    const line = 'We help you Create'
    const line2 = 'the Product'
    const line3 = 'You Want'

    return (
        <section className={styles.sHero} id='home'>
            <LeftSideLine className={styles.sLeftSideLine} />
            <SquareShape
                className={styles.sFloatSquareBlackShape}
                color='#1F2937'
            />
            <SquareShape
                className={styles.sFloatSquareYellowShape}
                color='#FCCA39'
            />
            <TestingEllipseShape className={styles.sFloatTestingEllipseShape} />
            <PolygonShape
                className={styles.sFloatPolygonBlueShape}
                color='#1768B4'
                strokeColor='#1F2937'
            />
            <ChatDevelopmentShape
                className={styles.sFloatChatDevelopmentShape}
            />
            <DesignPillShape className={styles.sFloatDesignPillShape} />
            <RightSideLine className={styles.sRightSideLine} />
            <HalfEllipseShape className={styles.sFloatHalfElffShape} />
            <PillShape className={styles.sFloatPillShape} />
            <SquareShape
                className={styles.sFloatSquareYellowRightShape}
                color='#FCCA39'
            />
            <SquareShape
                className={styles.sFloatSquarePinkShape}
                color='#FD96CE'
            />
            <PolygonShape
                className={styles.sFloatPolygonWhiteShape}
                color='#D9D9D9'
                strokeColor='#1F2937'
            />
            <DotShape className={styles.sFloatDotShape} />
            <div className={styles.sHeroContent}>
                <motion.h1
                    className={styles.sHeroText}
                    variants={animation.animateSentence}
                    custom={0.5}
                    initial='hidden'
                    animate='visible'
                >
                    {line.split('').map((char, index) => (
                        <motion.span
                            key={char + '-' + index}
                            variants={animation.animateLetter}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <br />
                    {line2.split('').map((char, index) => (
                        <motion.span
                            key={char + '-' + index}
                            variants={animation.animateLetter}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <br />
                    {line3.split('').map((char, index) => (
                        <motion.span
                            key={char + '-' + index}
                            variants={animation.animateLetter}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
                <Button
                    custom={2}
                    initial='hidden'
                    animate='visible'
                    variants={animation.animateHeroButton}
                    size='large'
                    variant='primary'
                    onClick={() => {}}
                    type='button'
                >
                    Start a Project
                </Button>
            </div>
        </section>
    )
}

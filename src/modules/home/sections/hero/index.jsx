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

import * as styles from './styles'

export default function HeroSection() {
    return (
        <section className={styles.sHero}>
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
                <h1 className={'text-heading1 text-primary-white text-center'}>
                    We help you Create <br />
                    the Product
                    <br />
                    You Want
                </h1>
                <Button
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

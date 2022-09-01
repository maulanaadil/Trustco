import React, { useEffect, useRef } from 'react'

import PropTypes from 'prop-types'

import lottie from 'lottie-web'
import { motion } from 'framer-motion'

import classnames from 'tailwindcss-classnames'
import * as styles from './styles'
import animationData from './assets/lottie/how-we-work.json'
import { ListTextHowWeWork } from './models'
import {
    containerDisplayOnChange,
    removeTextSection,
    changeTextHandler,
} from './helper'

export default function HowWeWorkSection() {
    const lottieRef = useRef(null)

    useEffect(() => {
        const animDuration = 10000
        const anim = lottie.loadAnimation({
            container: lottieRef.current != null ? lottieRef.current : null,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            name: 'HowWeWorkAnimation',

            animationData,
        })

        const animatebodymovin = (duration) => {
            const scrollPosition = window.scrollY
            const maxFrames = anim.totalFrames

            const frame =
                (maxFrames / 100) * (scrollPosition / (duration / 100))

            anim.goToAndStop(frame, true)
        }
        const onScroll = () => {
            const scrollPosition = window.scrollY
            animatebodymovin(animDuration)
            containerDisplayOnChange(scrollPosition)
            removeTextSection(scrollPosition)

            changeTextHandler(scrollPosition)
        }

        document.addEventListener('scroll', onScroll)

        return () => {
            anim.destroy()
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div className={styles.sPinSpacer}>
            <section className={styles.sHowWeWork} id='how-we-work'>
                <h2 className={styles.sHowWeWorkTitle}>How We Work</h2>
                <div className={styles.sHowWeWorkContent}>
                    <div className={styles.sHowWeWorkAnimationWrapper}>
                        <div ref={lottieRef} />
                    </div>
                    <div className={styles.sHowWeWorkContentWrapper}>
                        {ListTextHowWeWork.map((item) => (
                            <TextContent
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

function TextContent({ id, title, description }) {
    return (
        <motion.div
            className={classnames(
                styles.sHowWeWorkTextContent,
                'text-content-active'
            )}
            id={`text-content-${id}`}
        >
            <h5 className={styles.sHowWeWorkTextTitle}>{title}</h5>
            <p className={styles.sHowWeWorkTextDescription}>{description}</p>
        </motion.div>
    )
}

TextContent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

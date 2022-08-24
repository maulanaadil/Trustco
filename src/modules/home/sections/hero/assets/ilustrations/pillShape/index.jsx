import React from 'react'

import { motion } from 'framer-motion'

import { animateBounce } from '../animation'
import PropTypes from 'prop-types'

export default function PillShape({ className }) {
    return (
        <motion.svg
            width='234'
            height='237'
            viewBox='0 0 234 237'
            fill='none'
            initial='hidden'
            animate='visible'
            variants={animateBounce}
            custom={1}
            className={className}
            xmlns='http://www.w3.org/2000/svg'
        >
            <motion.rect
                x='47.5132'
                y='60'
                width='160.319'
                height='70.2522'
                rx='20'
                transform='rotate(14.4355 47.5132 60)'
                fill='#FCCA39'
            />
            <motion.rect
                x='51.2166'
                y='70.9244'
                width='155.11'
                height='70.2242'
                rx='19.5'
                transform='rotate(15.0877 51.2166 70.9244)'
                stroke='#1F2937'
            />
        </motion.svg>
    )
}

PillShape.propTypes = {
    className: PropTypes.string,
}

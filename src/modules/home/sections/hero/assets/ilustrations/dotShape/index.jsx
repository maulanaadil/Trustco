import React from 'react'

import { motion } from 'framer-motion'

import PropTypes from 'prop-types'
import { animateBounce } from '../animation'

export default function DotShape({ className }) {
    return (
        <motion.svg
            width='63'
            height='49'
            viewBox='0 0 63 49'
            fill='none'
            initial='hidden'
            animate='visible'
            variants={animateBounce}
            custom={1}
            className={className}
            xmlns='http://www.w3.org/2000/svg'
        >
            <motion.rect
                x='10.9185'
                y='0.205017'
                width='14.5216'
                height='14.5216'
                rx='7.26081'
                transform='rotate(48.7531 10.9185 0.205017)'
                fill='#1768B4'
            />
            <motion.rect
                x='32.9185'
                y='28'
                width='14.5216'
                height='14.5216'
                rx='7.26081'
                transform='rotate(48.7531 32.9185 28)'
                fill='#FD96CE'
            />
            <motion.rect
                x='52.9185'
                width='14.5216'
                height='14.5216'
                rx='7.26081'
                transform='rotate(48.7531 52.9185 0)'
                fill='#D9D9D9'
            />
        </motion.svg>
    )
}

DotShape.propTypes = {
    className: PropTypes.string,
}

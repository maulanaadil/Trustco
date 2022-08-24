import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import { animateDrawLine } from '../animation'

export default function LeftSideLine({ className }) {
    return (
        <motion.svg
            width='713'
            height='362'
            viewBox='0 0 713 362'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            animate='visible'
            initial='hidden'
        >
            <motion.path
                d='M-55 119.99C-55 119.99 21 -11 70.5 10.5C120 32 150.5 454.5 706.5 339.5'
                stroke='#1F2937'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
                variants={animateDrawLine}
                custom={1}
            />
            <motion.rect
                x='701'
                y='333'
                width='12'
                height='12'
                rx='6'
                fill='#1F2937'
                variants={animateDrawLine}
                custom={3.2}
            />
            <motion.rect
                x='59'
                width='16'
                height='16'
                rx='8'
                fill='#1F2937'
                variants={animateDrawLine}
                custom={1.2}
            />
        </motion.svg>
    )
}

LeftSideLine.propTypes = {
    className: PropTypes.string,
}

import React from 'react'

import { motion } from 'framer-motion'
import { animateDrawLine } from '../animation'

import PropTypes from 'prop-types'

export default function RightSideLine({ className }) {
    return (
        <motion.svg
            width='240'
            height='184'
            viewBox='0 0 240 184'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            animate='visible'
            initial='hidden'
        >
            <motion.path
                d='M251.696 68.4313C189 179.843 211.696 -23.0687 175.696 52.9313C161.696 75.4313 7.99997 -32.1573 164 13.3427C151.031 14.8466 139.05 17.9662 128 22.3162C41.4863 56.3723 12 165.843 12 165.843'
                stroke='#1F2937'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
                variants={animateDrawLine}
                custom={1}
            />
            <motion.rect
                x='2'
                y='166.343'
                width='15'
                height='15'
                rx='7.5'
                stroke='#1F2937'
                strokeWidth='4'
                variants={animateDrawLine}
                custom={2}
            />
        </motion.svg>
    )
}

RightSideLine.propTypes = {
    className: PropTypes.string,
}

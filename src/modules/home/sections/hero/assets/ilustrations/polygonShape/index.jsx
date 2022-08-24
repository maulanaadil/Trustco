import React from 'react'

import { motion } from 'framer-motion'

import { animateBounce } from '../animation'
import PropTypes from 'prop-types'

export default function PolygonShape({ className, color, strokeColor }) {
    return (
        <motion.svg
            width='235'
            height='224'
            viewBox='0 0 235 224'
            fill='none'
            initial='hidden'
            animate='visible'
            variants={animateBounce}
            custom={1}
            className={className}
            xmlns='http://www.w3.org/2000/svg'
        >
            <motion.path
                d='M160.198 59.9842C163.897 59.1342 167.157 62.5534 166.132 66.2077L133.994 180.772C132.947 184.504 128.236 185.677 125.561 182.872L41.7353 94.9564C39.0606 92.1512 40.4566 87.5011 44.2341 86.633L160.198 59.9842Z'
                fill={color}
            />
            <motion.path
                d='M176.422 66.1219L144.284 180.686C143.342 184.045 139.102 185.101 136.695 182.576L52.8686 94.6606C50.4614 92.1359 51.7179 87.9508 55.1176 87.1696L171.082 60.5208C174.411 59.7558 177.345 62.8331 176.422 66.1219Z'
                stroke={strokeColor}
            />
        </motion.svg>
    )
}

PolygonShape.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
    strokeColor: PropTypes.string.isRequired,
}

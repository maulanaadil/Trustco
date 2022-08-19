import React from 'react'

import { motion } from 'framer-motion'

import PropTypes from 'prop-types'

export default function SquareShape({ className, color }) {
    return (
        <motion.svg
            width='43'
            height='43'
            viewBox='0 0 43 43'
            fill='none'
            className={className}
            xmlns='http://www.w3.org/2000/svg'
        >
            <motion.rect
                x='22.5563'
                width='30'
                height='30'
                rx='5'
                transform='rotate(48.7531 22.5563 0)'
                fill={color}
            />
        </motion.svg>
    )
}

SquareShape.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
}

import React from 'react'

import { motion } from 'framer-motion'

import PropTypes from 'prop-types'
import { animateBounce } from '../animation'

export default function HalfEllipseShape({ className }) {
  return (
    <motion.svg
      width="200"
      height="156"
      viewBox="0 0 200 156"
      fill="none"
      initial="hidden"
      animate="visible"
      variants={animateBounce}
      custom={1}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M129.394 59.4889C134.031 56.4892 135.412 50.2292 131.706 46.1339C123.038 36.5535 111.526 29.8541 98.7308 27.1105C82.6528 23.6632 65.8639 26.7441 52.0574 35.6753C38.2509 44.6066 28.5578 58.6566 25.1105 74.7346C22.367 87.5302 23.7582 100.776 28.9426 112.611C31.1586 117.669 37.4345 118.976 42.0717 115.977L85.7327 87.7327L129.394 59.4889Z"
        fill="#FD96CE"
      />
      <motion.path
        d="M70.1127 112.688C65.4153 115.593 63.9071 121.824 67.5284 125.994C76.0001 135.749 87.3723 142.681 100.109 145.685C116.114 149.459 132.962 146.721 146.948 138.073C160.933 129.425 170.911 115.576 174.685 99.5711C177.689 86.8341 176.568 73.5626 171.626 61.6249C169.513 56.5221 163.265 55.0875 158.568 57.9921L114.34 85.3403L70.1127 112.688Z"
        fill="#1768B4"
      />
    </motion.svg>
  )
}

HalfEllipseShape.propTypes = {
  className: PropTypes.string,
}

export const animateBounce = {
    hidden: {
        opacity: 0,
    },
    visible: (custom) => ({
        opacity: 1,
        y: ['-5%', '0%'],
        transition: {
            y: {
                duration: custom,
                yoyo: Infinity,
                ease: 'easeOut',
                opacity: 1,
                duration: 0.8,
            },
        },
    }),
}

export const animateDrawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    delay,
                    type: 'spring',
                    duration: 1.5,
                    bounce: 0,
                },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

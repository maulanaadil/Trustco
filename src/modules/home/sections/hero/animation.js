export const animateSentence = {
  hidden: {
    opacity: 1,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom,
      staggerChildren: 0.08,
    },
  }),
}

export const animateLetter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const animateHeroButton = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      opacity: 1,
      duration: 2,
    },
  },
}

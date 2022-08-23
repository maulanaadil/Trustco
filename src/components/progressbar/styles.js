import classnames from 'tailwindcss-classnames'

export const sProgressBar = classnames(
    'fixed',
    'z-50',
    'top-0',
    'backdrop-blur-3xl',
    'w-full',
    'h-1',
    'bg-transparent',
    'drop-shadow-lg'
)

export const sProgressBarWidth = classnames(
    'absolute',
    'bottom-0',
    'w-full',
    'transition-transform',
    'duration-150',
    'h-1',
    'bg-primary-cream'
)

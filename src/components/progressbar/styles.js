import classnames, {
    backdropBlur,
    position,
    zIndex,
    width,
    height,
    backgroundColor,
    dropShadow,
    inset,
    transitionProperty,
    transitionDuration,
} from 'tailwindcss-classnames'

export const sProgressBar = classnames(
    position('fixed'),
    width('w-full'),
    height('h-1'),
    zIndex('z-50'),
    backdropBlur('backdrop-blur-3xl'),
    backgroundColor('bg-transparent'),
    dropShadow('drop-shadow-lg'),
    inset('top-0')
)

export const sProgressBarWidth = classnames(
    position('absolute'),
    inset('bottom-0'),
    width('w-full'),
    height('h-1'),
    backgroundColor('bg-primary-cream'),
    transitionProperty('transition-transform'),
    transitionDuration('duration-150')
)

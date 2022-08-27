import classnames, {
    fontSize,
    fontWeight,
    textDecoration,
    transitionProperty,
    textColor,
} from 'tailwindcss-classnames'

export const sNavItem = classnames(
    fontSize('text-normal'),
    textColor('text-secondary-gray1', 'hover:text-primary-white'),
    textDecoration('no-underline'),
    fontWeight('font-medium'),
    transitionProperty('transition-all')
)

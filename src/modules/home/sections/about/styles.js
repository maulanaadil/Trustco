import { classnames } from 'tailwindcss-classnames'

export const sAbout = classnames('w-full', 'relative')

export const sAboutContent = classnames(
    'flex',
    'gap-[60px]',
    'mx-auto',
    'py-[60px]',
    'max-w-[926px]',
    'z-10'
)

export const sAboutTitle = classnames(
    'text-heading2',
    'font-medium',
    'text-primary-coffee',
    'w-3/4'
)

export const sAboutTitleSpan = classnames(
    'text-heading2',
    'font-medium',
    'text-primary-black'
)

export const sAboutDescription = classnames(
    'text-large',
    'font-normal',
    'text-secondary-gray2'
)

export const sFloatBlobShape = classnames(
    'absolute',
    'left-[-50px]',
    'top-[-20px]',
    'max-w-[500px]',
    'z-[-2]'
)

export const sFloatBlobOutlineShape = classnames(
    'absolute',
    'left-[-50px]',
    'top-[-6px]',
    'max-w-[500px]',
    'z-[-2]'
)

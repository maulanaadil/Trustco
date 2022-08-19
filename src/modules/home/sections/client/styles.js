import { classnames } from 'tailwindcss-classnames'

export const sClient = classnames('w-full', 'max-h-[250px]')

export const sClientWrapper = classnames(
    'max-w-[900px]',
    'h-full',
    'grid',
    'grid-cols-4',
    'gap-x-[50px]',
    'gap-y-[30px]',
    'p-[30px]',
    'm-auto'
)

export const sClientLogoWrapper = classnames(
    'w-full',
    'h-full',
    'flex',
    'justify-center',
    'items-center'
)

export const sClientLogo = classnames(
    'object-cover',
    'm-auto',
    'contrast-0',
    'opacity-80'
)

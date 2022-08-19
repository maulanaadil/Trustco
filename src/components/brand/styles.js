import classnames from 'tailwindcss-classnames'

export const sBrand = classnames(
    'flex',
    'gap-[8px]',
    'justify-center',
    'items-center'
)

export const sBrandLogo = classnames(
    'w-[40px]',
    'h-[40px]',
    'object-cover',
    'object-center'
)

export const sBrandLogoText = classnames('text-normal', 'text-primary-white')

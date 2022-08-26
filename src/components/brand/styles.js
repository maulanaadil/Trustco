import classnames, {
    alignItems,
    justifyContent,
    display,
    gap,
    objectPosition,
    objectFit,
} from 'tailwindcss-classnames'

export const sBrand = classnames(
    display('flex', 'justify-center', 'items-center'),
    justifyContent('justify-center'),
    alignItems('items-center'),
    gap('gap-[8px]')
)

export const sBrandLogo = classnames(
    display('w-[40px]', 'h-[40px]'),
    objectPosition('object-center'),
    objectFit('object-cover')
)

export const sBrandLogoText = classnames('text-normal', 'text-primary-white')

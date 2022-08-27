import classnames, {
    alignItems,
    justifyContent,
    display,
    gap,
    objectPosition,
    objectFit,
    width,
    height,
    fontSize,
    textColor,
} from 'tailwindcss-classnames'

export const sBrand = classnames(
    display('flex'),
    justifyContent('justify-center'),
    alignItems('items-center'),
    gap('gap-[8px]')
)

export const sBrandLogo = classnames(
    width('w-[40px]'),
    height('h-[40px]'),
    objectPosition('object-center'),
    objectFit('object-cover')
)

export const sBrandLogoText = classnames(
    fontSize('text-normal'),
    textColor('text-primary-white')
)

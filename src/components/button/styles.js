import classnames, {
    alignContent,
    borderRadius,
    cursor,
    display,
    fontSize,
    fontWeight,
    justifyContent,
    textColor,
    transitionDuration,
    transitionProperty,
    gap,
    width,
    padding,
    backgroundColor,
    borderColor,
    dropShadow,
    borderWidth,
} from 'tailwindcss-classnames'

export const sButton = classnames(
    display('flex'),
    justifyContent('justify-center'),
    alignContent('align-center'),
    gap('gap-[10px]'),
    borderRadius('rounded-[12px]'),
    cursor('cursor-pointer'),
    transitionProperty('transition-all'),
    transitionDuration('duration-300'),
    textColor('text-primary-white'),
    fontSize('text-normal'),
    fontWeight('font-medium')
)

export const sButtonFullWidth = classnames(width('w-full'))

export const sButtonNormal = classnames(padding('py-[12px]', 'px-[18px]'))

export const sButtonLarge = classnames(
    textColor('text-primary-white'),
    fontWeight('text-normal'),
    padding('py-[18px]', 'px-[18px]')
)

export const sButtonPrimary = classnames(
    textColor('text-primary-white'),
    backgroundColor('bg-primary-coffee', 'hover:bg-[#BF8458]'),
    borderColor('border-primary-coffee'),
    dropShadow('shadow-btnShadow')
)

export const sButtonPrimaryOutline = classnames(
    textColor('text-primary-coffee'),
    borderWidth('border-[1px]'),
    borderColor('border-primary-coffee'),
    backgroundColor('hover:bg-[#ECE1D8]')
)

export const sButtonSecondary = classnames(
    textColor('text-primary-white'),
    backgroundColor('bg-secondary-onyx', 'hover:bg-[#302E3D]'),
    borderColor('border-secondary-onyx'),
    dropShadow('shadow-btnShadow')
)

export const sButtonSecondaryOutline = classnames(
    textColor('text-secondary-onyx'),
    borderWidth('border-[1px]'),
    borderColor('border-secondary-onyx'),
    backgroundColor('hover:bg-[#D7D4E5]')
)

export const sButtonDisabled = classnames(
    textColor('text-secondary-gray2'),
    backgroundColor('bg-secondary-white'),
    cursor('cursor-not-allowed')
)

export const sButtonDisabledOutline = classnames(
    textColor('text-secondary-gray2'),
    borderWidth('border-[1px]'),
    borderColor('border-secondary-gray2'),
    cursor('cursor-not-allowed')
)

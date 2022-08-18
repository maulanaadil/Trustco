import { classnames } from 'tailwindcss-classnames'

export const sButton = classnames(
    'cursor-pointer',
    'rounded-[12px]',
    'transition-all',
    'duration-300',
    'text-normal-primary-white',
    'font-medium'
)

export const sButtonFullWidth = classnames('w-full')

export const sButtonNormal = classnames('py-[12px]', 'px-[18px]')

export const sButtonLarge = classnames(
    'text-normal-primary-white',
    'py-[18px]',
    'px-[18px]'
)

export const sButtonPrimary = classnames(
    'text-primary-white',
    'bg-primary-coffee',
    'border-primary-coffee',
    'shadow-btnShadow',
    'hover:bg-[#BF8458]'
)

export const sButtonPrimaryOutline = classnames(
    'text-primary-coffee',
    'border-[1px]',
    'border-primary-coffee',
    'hover:bg-[#ECE1D8]'
)

export const sButtonSecondary = classnames(
    'text-primary-white',
    'bg-secondary-onyx',
    'border-secondary-onyx',
    'shadow-btnShadow',
    'hover:bg-[#302E3D]'
)

export const sButtonSecondaryOutline = classnames(
    'text-seconary-onyx',
    'border-[1px]',
    'border-secondary-onyx',
    'hover:bg-[#D7D4E5]'
)

export const sButtonDisabled = classnames(
    'text-secondary-gray2',
    'bg-secondary-white',
    'cursor-not-allowed'
)

export const sButtonDisabledOutline = classnames(
    'text-secondary-gray2',
    'border-[1px]',
    'border-secondary-gray2',
    'cursor-not-allowed'
)

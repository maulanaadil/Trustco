import classnames from 'tailwindcss-classnames'

export const sPinSpacer = classnames('w-full', 'h-[9000px]', 'relative')

export const sHowWeWork = classnames('w-full', 'absolute')

export const sHowWeWorkContainer = classnames('fixed')

export const sHowWeWorkTitle = classnames(
    'text-heading2',
    'font-medium',
    'text-primary-black',
    'text-center',
    'mx-auto',
    'pt-[40px]'
)

export const sHowWeWorkContent = classnames(
    'flex',
    'justify-center',
    'items-center',
    'mx-auto',
    'max-w-[1102px]',
    'z-10'
)

export const sHowWeWorkAnimationWrapper = classnames(
    'w-max-[438px]',
    'h-max-[524px]'
)

export const sHowWeWorkTextContent = classnames(
    'flex',
    'flex-col',
    'max-w-[565px]',
    'absolute',
    'top-[-100px]',
    'opacity-0',
    'transition-opacity',
    'ease-out',
    'duration-700'
)

export const sHowWeWorkContentWrapper = classnames(
    'relative',
    'w-3/4',
    'h-full'
)

export const sHowWeWorkTextTitle = classnames(
    'text-heading4',
    'font-medium',
    'text-primary-coffee'
)

export const sHowWeWorkTextDescription = classnames(
    'text-heading5',
    'font-normal',
    'text-secondary-gray2'
)

import { classnames } from 'tailwindcss-classnames'

export const sProjects = classnames('w-full', 'relative')

export const sProjectsTitleWrapper = classnames(
    'mx-auto',
    'w-full',
    'flex',
    'flex-col',
    'items-center',
    'justify-center'
)

export const sProjectsTitle = classnames(
    'text-heading2',
    'font-medium',
    'text-primary-black',
    'text-center'
)

export const sProjectSubTitle = classnames(
    'text-heading5',
    'font-medium',
    'text-secondary-gray2',
    'text-center'
)

export const sProjectSubTitleUnderline = classnames('underline')

export const sProjectContainer = classnames(
    'mx-auto',
    'max-w-[980px]',
    'mt-[50px]',
    'grid',
    'grid-cols-10',
    'auto-rows-minmax(400px, auto)',
    'gap-x-[40px]',
    'z-10'
)

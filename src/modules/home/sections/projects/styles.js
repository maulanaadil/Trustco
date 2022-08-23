import { classnames } from 'tailwindcss-classnames'

export const sProjects = classnames('w-full', 'relative', 'pt-[100px]')

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

export const sProjectItem = classnames('w-full', 'h-full', 'col-span-5')

export const sProjectItemImageContainer = classnames(
    'relative',
    'w-full',
    'h-3/4',
    'overflow-hidden',
    'rounded-md',
    'drop-shadow-md',
    'shadow-secondary-onyx'
)

export const sProjectItemOverlay = classnames(
    'w-full',
    ' h-full',
    'absolute',
    'flex',
    'justify-center',
    'items-center',
    'bg-cover',
    'bg-center',
    'bg-secondary-onyx',
    'opacity-[0.9]',
    'card-transition',
    'hover:opacity-0'
)

export const sProjectItemLogo = classnames(
    'h-[150px]',
    'object-cover',
    'bg-center',
    'bg-cover'
)

export const sProjectItemImageWrapper = classnames(
    'w-full',
    'h-full',
    'object-cover'
)

export const sProjectItemImage = classnames(
    'object-cover',
    'bg-center',
    'bg-cover'
)

export const sProjectItemContent = classnames('flex', 'justify-between')

export const sProjectItemContentWrapper = classnames('flex', 'flex-col')

export const sProjectItemTitle = classnames(
    'text-large',
    'font-medium',
    'text-secondary-gray2'
)

export const sProjectItemType = classnames(
    'text-normal',
    'font-light',
    'text-secondary-gray2'
)

export const sProjectItemYear = classnames(
    'text-large',
    'font-light',
    'text-secondary-gray2'
)

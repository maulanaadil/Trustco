import { classnames } from 'tailwindcss-classnames'

export const sFooter = classnames('w-full', 'bg-secondary-onyx')

export const sFooterContainer = classnames(
    'max-w-[1180px]',
    'grid',
    'grid-cols-12',
    'gap-4',
    'mx-auto',
    'pt-[40px]',
    'auto-rows-minmax(250px, auto)'
)

export const sFooterContentWrapper = classnames(
    'col-span-3',
    'py-[10px]',
    'px-[10px]'
)

export const sFooterlogo = classnames('logo-footer')

export const sFooterTitleItem = classnames(
    'text-heading6',
    'text-secondary-white',
    'font-semibold'
)

export const sFooterItem = classnames(
    'text-normal',
    'text-secondary-white',
    'mt-[20px]',
    'hover:text-primary-white',
    'transition-all',
    'duration-200'
)

export const sFooterSiteMap = classnames('col-span-12')

export const sFooterDivider = classnames(
    'bg-secondary-gray1',
    'border-none',
    'h-[0.5px]'
)

export const sFooterSiteMapWrapper = classnames(
    'flex',
    'justify-between',
    'py-[18px]'
)

export const sFooterCopyright = classnames('text-small', 'text-secondary-gray1')

export const sFooterSiteMapItemWrapper = classnames('flex', ' gap-5')

export const sFooterSiteMapItem = classnames(
    'text-small',
    'text-secondary-gray1',
    'no-underline',
    'hover:text-secondary-white',
    'transition-all',
    'duration-200'
)

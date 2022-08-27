import classnames, {
    alignItems,
    contrast,
    flex,
    gap,
    grid,
    gridColumn,
    height,
    justifyContent,
    margin,
    objectFit,
    opacity,
    padding,
    width,
} from 'tailwindcss-classnames'

export const sClient = classnames('w-full')

export const sClientWrapper = classnames(
    width('max-w-[900px]'),
    height('h-full'),
    grid('grid'),
    gridColumn('grid-cols-4'),
    gap('gap-x-[50px]', 'gap-y-[30px]'),
    padding('p-[30px]'),
    margin('m-auto')
)

export const sClientLogoWrapper = classnames(
    width('w-full'),
    height('h-full'),
    grid('col-span-2', 'md:col-span-1'),
    flex('flex'),
    justifyContent('justify-center'),
    alignItems('items-center')
)

export const sClientLogo = classnames(
    objectFit('object-cover'),
    margin('m-auto'),
    contrast('contrast-0'),
    opacity('opacity-80')
)

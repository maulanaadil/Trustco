import classnames, {
    alignItems,
    backgroundColor,
    display,
    gap,
    justifyContent,
    padding,
    width,
} from 'tailwindcss-classnames'

export const sHeader = classnames(
    display('flex'),
    width('w-full', 'max-h-[70px]'),
    backgroundColor('bg-secondary-onyx'),
    alignItems('items-center'),
    justifyContent('justify-between'),
    padding('px-[130px]', 'py-[14px]')
)

export const sWrapperNavItem = classnames(
    display('flex'),
    alignItems('items-center'),
    gap('gap-[25px]'),
    padding('p-[10px]')
)

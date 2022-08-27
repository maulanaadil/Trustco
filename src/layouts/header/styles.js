import classnames, {
    alignItems,
    backgroundColor,
    borderRadius,
    display,
    gap,
    justifyContent,
    outlineStyle,
    padding,
    ringColor,
    ringOffsetWidth,
    ringWidth,
    textColor,
    width,
    margin,
    height,
    position,
    inset,
    transitionProperty,
    transitionTimingFunction,
    transforms,
    transformOrigin,
    zIndex,
    flexDirection,
    flex,
} from 'tailwindcss-classnames'

export const sHeader = classnames(
    display('md:flex'),
    width('w-full', 'max-h-[70px]'),
    backgroundColor('bg-secondary-onyx'),
    alignItems('items-center'),
    justifyContent('justify-between'),
    padding('px-[20px]', 'md:px-[130px]', 'py-[20px]', 'md:py-[14px]')
)

export const sWrapperNavItem = classnames(
    display('hidden', 'md:flex'),
    alignItems('items-center'),
    gap('gap-[25px]'),
    padding('p-[10px]')
)

export const sButtonHeader = classnames(display('hidden', 'md:block'))

export const smHeaderWrapper = classnames(
    display('flex', 'md:static'),
    justifyContent('justify-between'),
    alignItems('items-center')
)

export const smHeaderContainerButtonOpen = classnames(
    display('md:hidden'),
    margin('-mr-2', '-my-2')
)

export const smHeaderButton = classnames(
    borderRadius('rounded-md'),
    padding('p-2'),
    display('inline-flex'),
    alignItems('items-center'),
    justifyContent('justify-center'),
    textColor('text-gray-400', 'hover:text-gray-500'),
    backgroundColor('hover:bg-gray-100'),
    outlineStyle('focus:outline-none'),
    ringWidth('focus:ring-2'),
    ringOffsetWidth('focus:ring-inset'),
    ringColor('focus:ring-indigo-500')
)

export const smSrOnly = classnames('sr-only')

export const smIconBar = classnames(
    height('h-6'),
    width('w-6'),
    textColor('text-primary-white')
)

export const smHeaderContainer = classnames(
    position('absolute'),
    width('w-full'),
    height('h-full'),
    inset('top-0', 'inset-x-0'),
    backgroundColor('bg-primary-cultured'),
    transitionProperty('transition-all'),
    transitionTimingFunction('ease-in-out'),
    transforms('transform'),
    transformOrigin('origin-top-right'),
    zIndex('z-50'),
    display('md:hidden')
)

export const smHeaderResponsiveWrapper = classnames(
    padding('py-[20px]', 'px-[20px]'),
    flex('flex'),
    flexDirection('flex-col'),
    alignItems('items-center')
)

export const smHeaderButtonCloseWrapper = classnames(
    flex('flex'),
    width('w-full'),
    justifyContent('!justify-end'),
    alignItems('items-end')
)

export const smIconXMark = classnames(
    width('w-6'),
    height('h-6'),
    textColor('text-secondary-onyx')
)

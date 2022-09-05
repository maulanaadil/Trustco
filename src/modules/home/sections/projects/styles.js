import classnames, {
    alignItems,
    backgroundColor,
    backgroundPosition,
    backgroundSize,
    borderRadius,
    boxShadowColor,
    dropShadow,
    flex,
    flexDirection,
    fontSize,
    fontWeight,
    gap,
    grid,
    gridAutoRows,
    gridColumn,
    height,
    justifyContent,
    margin,
    maxWidth,
    objectFit,
    opacity,
    overflow,
    padding,
    position,
    textAlign,
    textColor,
    textDecoration,
    transitionProperty,
    width,
    zIndex,
} from 'tailwindcss-classnames'

export const sProjects = classnames(
    width('w-full'),
    position('relative'),
    padding('pt-[300px]', 'md:pt-[100px]')
)

export const sProjectsTitleWrapper = classnames(
    margin('mx-auto'),
    width('w-full'),
    flex('flex'),
    flexDirection('flex-col'),
    alignItems('items-center'),
    justifyContent('justify-center')
)

export const sProjectsTitle = classnames(
    fontSize('text-heading3', 'md:text-heading2'),
    fontWeight('font-medium'),
    textColor('text-primary-black'),
    textAlign('text-center')
)

export const sProjectSubTitle = classnames(
    fontSize('text-heading6', 'md:text-heading5'),
    fontWeight('font-medium'),
    textColor('text-secondary-gray2'),
    textAlign('text-center')
)

export const sProjectSubTitleUnderline = classnames(textDecoration('underline'))

export const sProjectContainer = classnames(
    margin('mx-auto'),
    maxWidth('max-w-[980px]'),
    margin('mt-[50px]'),
    grid('grid'),
    gridColumn('grid-cols-10'),
    gridAutoRows('auto-rows-minmax(400px, auto)'),
    gap('gap-y-5', 'md:gap-y-0', 'md:gap-x-[40px]'),
    zIndex('z-10')
)

export const sProjectItem = classnames(
    width('w-full'),
    height('h-full'),
    grid('col-span-10', 'md:col-span-5'),
    padding('px-[30px]', 'md:px-0')
)

export const sProjectItemImageContainer = classnames(
    position('relative'),
    width('w-full'),
    height('h-3/4'),
    overflow('overflow-hidden'),
    borderRadius('rounded-md'),
    dropShadow('drop-shadow-md'),
    boxShadowColor('shadow-secondary-onyx')
)

export const sProjectItemOverlay = classnames(
    width('w-full'),
    height('h-full'),
    position('absolute'),
    flex('flex'),
    justifyContent('justify-center'),
    alignItems('items-center'),
    backgroundSize('bg-cover'),
    backgroundPosition('bg-center'),
    backgroundColor('bg-secondary-onyx'),
    opacity('opacity-[0.9]', 'hover:opacity-0'),
    transitionProperty('card-transition'),
    zIndex('z-50')
)

export const sProjectItemLogo = classnames(
    width('w-full'),
    height('h-full'),
    objectFit('object-cover'),
    backgroundSize('bg-cover')
)

export const sProjectItemImageContainerWrapper = classnames(
    maxWidth('max-w-[250px]')
)

export const sProjectItemImageWrapper = classnames(
    width('w-full'),
    height('h-full'),
    objectFit('object-cover')
)

export const sProjectItemImage = classnames(
    objectFit('object-cover'),
    backgroundPosition('bg-center'),
    backgroundSize('bg-cover')
)

export const sProjectItemContent = classnames(
    flex('flex'),
    justifyContent('justify-between')
)

export const sProjectItemContentWrapper = classnames(
    flex('flex'),
    flexDirection('flex-col')
)

export const sProjectItemTitle = classnames(
    fontSize('text-large'),
    fontWeight('font-medium'),
    textColor('text-secondary-gray2')
)

export const sProjectItemType = classnames(
    fontSize('text-normal'),
    fontWeight('font-light'),
    textColor('text-secondary-gray2')
)

export const sProjectItemYear = classnames(
    fontSize('text-large'),
    fontWeight('font-light'),
    textColor('text-secondary-gray2')
)

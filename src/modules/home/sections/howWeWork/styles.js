import classnames, {
    alignItems,
    flex,
    flexDirection,
    fontSize,
    fontWeight,
    height,
    inset,
    justifyContent,
    margin,
    maxHeight,
    maxWidth,
    opacity,
    padding,
    position,
    textAlign,
    textColor,
    transitionDuration,
    transitionProperty,
    transitionTimingFunction,
    width,
    zIndex,
} from 'tailwindcss-classnames'

export const sPinSpacer = classnames(
    width('w-full'),
    height('h-[9000px]'),
    position('relative')
)

export const sHowWeWork = classnames(width('w-full'), position('absolute'))

export const sHowWeWorkContainer = classnames(position('fixed'))

export const sHowWeWorkTitle = classnames(
    fontSize('text-heading2'),
    fontWeight('font-medium'),
    textColor('text-primary-black'),
    textAlign('text-center'),
    margin('mx-auto'),
    padding('pt-[40px]')
)

export const sHowWeWorkContent = classnames(
    flex('flex'),
    justifyContent('justify-center'),
    alignItems('items-center'),
    margin('mx-auto'),
    maxWidth('max-w-[1102px]'),
    zIndex('z-10')
)

export const sHowWeWorkAnimationWrapper = classnames(
    maxWidth('w-max-[438px]'),
    maxHeight('h-max-[524px]')
)

export const sHowWeWorkTextContent = classnames(
    flex('flex'),
    flexDirection('flex-col'),
    maxWidth('max-w-[565px]'),
    position('absolute'),
    inset('top-[-100px]'),
    opacity('opacity-0'),
    transitionProperty('transition-opacity'),
    transitionTimingFunction('ease-out'),
    transitionDuration('duration-700')
)

export const sHowWeWorkContentWrapper = classnames(
    position('relative'),
    width('w-3/4'),
    height('h-full')
)

export const sHowWeWorkTextTitle = classnames(
    fontSize('text-heading4'),
    fontWeight('font-medium'),
    textColor('text-primary-coffee')
)

export const sHowWeWorkTextDescription = classnames(
    fontSize('text-heading5'),
    fontWeight('font-normal'),
    textColor('text-secondary-gray2')
)

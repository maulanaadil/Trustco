import classnames, {
    alignItems,
    backgroundColor,
    flex,
    flexDirection,
    fontSize,
    fontWeight,
    gap,
    justifyContent,
    margin,
    padding,
    textAlign,
    textColor,
    width,
} from 'tailwindcss-classnames'

export const sIntrested = classnames(
    width('w-full'),
    backgroundColor('bg-primary-coffee')
)

export const sIntrestedContent = classnames(
    flex('flex'),
    flexDirection('flex-col'),
    alignItems('items-center'),
    justifyContent('justify-center'),
    margin('mx-auto'),
    padding('py-[70px]'),
    gap('gap-[50px]')
)

export const sIntrestedTitle = classnames(
    fontSize('text-heading3'),
    fontWeight('font-semibold'),
    textAlign('text-center'),
    textColor('text-secondary-white')
)

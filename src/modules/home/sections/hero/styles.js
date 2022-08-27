import classnames, {
    alignItems,
    backgroundColor,
    flex,
    flexDirection,
    fontSize,
    fontWeight,
    gap,
    height,
    inset,
    justifyContent,
    margin,
    maxWidth,
    minHeight,
    position,
    textAlign,
    textColor,
    width,
} from 'tailwindcss-classnames'

export const sHero = classnames(
    width('w-full'),
    height('h-full'),
    minHeight('min-h-[530px]'),
    backgroundColor('bg-secondary-onyx'),
    position('relative')
)

export const sHeroContent = classnames(
    flex('flex'),
    flexDirection('flex-col'),
    gap('gap-[40px]'),
    maxWidth('max-w-[600px]'),
    justifyContent('justify-center'),
    alignItems('items-center'),
    position('absolute'),
    inset('top-[40px]', 'left-0', 'right-0'),
    margin('m-auto')
)

export const sHeroText = classnames(
    fontSize('text-heading1'),
    fontWeight('font-medium'),
    textColor('text-primary-white'),
    textAlign('text-center')
)

export const sLeftSideLine = classnames(
    position('absolute'),
    inset('bottom-[23px]', 'left-0')
)

export const sRightSideLine = classnames(
    position('absolute'),
    inset('top-[36px]', 'right-0')
)

export const sFloatSquareBlackShape = classnames(
    position('absolute'),
    inset('top-[30px]', 'left-[180px]')
)

export const sFloatSquareYellowShape = classnames(
    position('absolute'),
    inset('bottom-[131px]', 'left-[98px]')
)

export const sFloatTestingEllipseShape = classnames(
    position('absolute'),
    inset('bottom-[2px]', 'left-[33x]')
)

export const sFloatPolygonBlueShape = classnames(
    position('absolute'),
    inset('bottom-[29px]', 'left-[130px]')
)

export const sFloatChatDevelopmentShape = classnames(
    position('absolute'),
    inset('bottom-0', 'left-[219px]')
)

export const sFloatDesignPillShape = classnames(
    position('absolute'),
    inset('bottom-0', 'left-[426px]')
)

export const sFloatHalfElffShape = classnames(
    position('absolute'),
    inset('bottom-0', 'right-[341px]')
)

export const sFloatPillShape = classnames(
    position('absolute'),
    inset('bottom-[16px]', 'right-[200px]')
)

export const sFloatSquareYellowRightShape = classnames(
    position('absolute'),
    inset('bottom-[28px]', 'right-[278px]')
)

export const sFloatSquarePinkShape = classnames(
    position('absolute'),
    inset('bottom-[139px]', 'right-[142px]')
)

export const sFloatPolygonWhiteShape = classnames(
    position('absolute'),
    inset('bottom-[-30px]', 'right-[40px]')
)

export const sFloatDotShape = classnames(
    position('absolute'),
    inset('bottom-[27px]', 'right-[43px]')
)

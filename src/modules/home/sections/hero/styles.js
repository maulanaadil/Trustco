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
    visibility,
    width,
    padding,
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
    padding('pt-[30px]', 'md:p-0'),
    maxWidth('max-w-[600px]'),
    justifyContent('justify-center'),
    alignItems('items-center'),
    position('absolute'),
    inset('top-[40px]', 'left-0', 'right-0'),
    margin('m-auto')
)

export const sHeroText = classnames(
    fontSize('text-heading4', 'md:text-heading1'),
    fontWeight('font-medium'),
    textColor('text-primary-white'),
    textAlign('text-center')
)

export const sLeftSideLine = classnames(
    position('absolute'),
    width('w-6/12', 'md:w-fit'),
    height('h-[200px]', 'md:h-fit'),
    inset('bottom-0', 'md:bottom-[23px]', 'left-0')
)

export const sRightSideLine = classnames(
    position('absolute'),
    width('w-6/12', 'md:w-fit'),
    inset('top-[36px]', 'right-[-100px]', 'md:right-0')
)

export const sFloatSquareBlackShape = classnames(
    position('absolute'),
    width('w-[25px]', 'md:w-fit'),
    height('h-[25px]', 'md:h-fit'),
    inset('top-0', 'md:top-[30px]', 'left-[80px]', 'md:left-[180px]')
)

export const sFloatSquareYellowShape = classnames(
    position('absolute'),
    width('w-[25px]', 'md:w-fit'),
    height('h-[25px]', 'md:h-fit'),
    inset('bottom-[55px]', 'md:bottom-[131px]', 'left-[20px]', 'md:left-[98px]')
)

export const sFloatTestingEllipseShape = classnames(
    position('absolute'),
    width('w-3/12', 'md:w-fit'),
    height('h-[50px]', 'md:h-fit'),
    inset('bottom-[2px]', 'left-[33x]')
)

export const sFloatPolygonBlueShape = classnames(
    position('absolute'),
    width('w-4/12', 'md:w-fit'),
    height('h-[100px]', 'md:h-fit'),
    inset('bottom-[30px]', 'md:bottom-[29px]', 'left-[24px]', 'md:left-[130px]')
)

export const sFloatChatDevelopmentShape = classnames(
    position('absolute'),
    width('w-4/12', 'md:w-fit'),
    inset('bottom-[-60px]', 'md:bottom-0', 'left-[70px]', 'md:left-[219px]')
)

export const sFloatDesignPillShape = classnames(
    position('absolute'),
    width('w-1/6', 'md:w-fit'),
    inset('bottom-[-20px]', 'md:bottom-0', 'left-[150px]', 'md:left-[426px]')
)

export const sFloatHalfElffShape = classnames(
    position('absolute'),
    width('w-3/12', 'md:w-fit'),
    inset('bottom-[-40px]', 'md:bottom-0', 'right-[80px]', 'md:right-[341px]')
)

export const sFloatPillShape = classnames(
    position('absolute'),
    width('w-3/12', 'md:w-fit'),
    height('h-[100px]', 'md:h-fit'),
    inset(
        'bottom-[10px]',
        'md:bottom-[16px]',
        'right-[16px]',
        'md:right-[200px]'
    )
)

export const sFloatSquareYellowRightShape = classnames(
    position('absolute'),
    visibility('invisible', 'md:visible'),
    inset('bottom-[28px]', 'right-[278px]')
)

export const sFloatSquarePinkShape = classnames(
    position('absolute'),
    visibility('invisible', 'md:visible'),
    inset('bottom-[139px]', 'right-[142px]')
)

export const sFloatPolygonWhiteShape = classnames(
    position('absolute'),
    visibility('invisible', 'md:visible'),
    inset('bottom-[-30px]', 'right-[40px]')
)

export const sFloatDotShape = classnames(
    position('absolute'),
    width('w-[30px]', 'md:w-fit'),
    height('h-[30px]', 'md:h-fit'),
    inset('bottom-[8px]', 'md:bottom-[27px]', 'right-[30px]', 'md:right-[43px]')
)

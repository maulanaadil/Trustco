import classnames, {
  width,
  grid,
  gridColumn,
  gap,
  margin,
  padding,
  gridAutoRows,
  justifyContent,
  fontSize,
  textColor,
  fontWeight,
  transitionProperty,
  backgroundColor,
  borderColor,
  transitionDuration,
  height,
  display,
  textDecoration,
  flexDirection,
  alignItems,
} from 'tailwindcss-classnames'

export const sFooter = classnames('w-full', 'bg-secondary-onyx')

export const sFooterContainer = classnames(
  width('max-w-[1180px]'),
  grid('grid'),
  gridColumn('grid-cols-12'),
  gap('gap-4'),
  margin('mx-auto'),
  padding('pt-[40px]', 'px-[10px]', 'md:px-0'),
  gridAutoRows('auto-rows-minmax(250px, auto)'),
)

export const sFooterContentWrapper = classnames(
  gridColumn('col-span-6', 'md:col-span-3'),
  padding('py-[10px]', 'px-[10px]'),
)

export const sFooterlogo = classnames(justifyContent('!justify-start'))

export const sFooterTitleItem = classnames(
  fontSize('text-heading6'),
  textColor('text-secondary-white'),
  fontWeight('font-semibold'),
)

export const sFooterItem = classnames(
  fontSize('text-normal'),
  textColor('text-secondary-white', 'hover:text-primary-white'),
  margin('mt-[20px]'),
  transitionProperty('transition-all'),
  transitionDuration('duration-200'),
)

export const sFooterSiteMap = classnames(gridColumn('col-span-12'))

export const sFooterDivider = classnames(
  backgroundColor('bg-secondary-gray1'),
  borderColor('border-none'),
  height('h-[0.5px]'),
)

export const sFooterSiteMapWrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  gap('gap-y-3', 'md:gap-y-0'),
  justifyContent('justify-center', 'md:justify-between'),
  alignItems('items-center', 'md:items-start'),
  padding('py-[18px]'),
)

export const sFooterCopyright = classnames(
  fontSize('text-small'),
  textColor('text-secondary-gray1'),
)

export const sFooterSiteMapItemWrapper = classnames(
  display('flex'),
  gap(' gap-5'),
)

export const sFooterSiteMapItem = classnames(
  fontSize('text-small'),
  textColor('text-secondary-gray1', 'hover:text-secondary-white'),
  textDecoration('no-underline'),
  transitionProperty('transition-all'),
  transitionDuration('duration-200'),
)

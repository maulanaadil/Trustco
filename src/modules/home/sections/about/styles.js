import classnames, {
  display,
  flex,
  flexDirection,
  fontSize,
  fontWeight,
  gap,
  inset,
  margin,
  padding,
  position,
  textColor,
  width,
  zIndex,
} from 'tailwindcss-classnames'

export const sAbout = classnames(display('w-full'), position('relative'))

export const sAboutContent = classnames(
  flex('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  gap('gap-5', 'md:gap-[60px]'),
  margin('mx-auto'),
  padding('px-[30px]', 'md:py-[60px]'),
  width('max-w-[926px]'),
  zIndex('z-10'),
)

export const sAboutTitle = classnames(
  fontSize('text-heading2'),
  fontWeight('font-medium'),
  textColor('text-primary-coffee'),
  width('w-3/4'),
)

export const sAboutTitleSpan = classnames(
  fontSize('text-heading2'),
  fontWeight('font-medium'),
  textColor('text-primary-black'),
)

export const sAboutDescription = classnames(
  fontSize('text-large'),
  fontWeight('font-normal'),
  textColor('text-secondary-gray2'),
)

export const sFloatBlobShape = classnames(
  position('absolute'),
  inset('left-[-50px]', 'top-[-20px]'),
  width('max-w-[500px]'),
  zIndex('z-[-2]'),
)

export const sFloatBlobOutlineShape = classnames(
  position('absolute'),
  inset('left-[-50px]', 'top-[-6px]'),
  width('max-w-[500px]'),
  zIndex('z-[-2]'),
)

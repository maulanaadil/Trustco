import * as styles from './styles'

export const getVariantStyle = (variant) => {
  switch (variant) {
    case 'primary':
      return styles.sButtonPrimary

    case 'secondary':
      return styles.sButtonSecondary

    case 'primaryOutline':
      return styles.sButtonPrimaryOutline

    case 'secondaryOutline':
      return styles.sButtonSecondaryOutline

    default:
      return ''
  }
}

export const getSizeStyle = (size) => {
  switch (size) {
    case 'normal':
      return styles.sButtonNormal

    case 'large':
      return styles.sButtonLarge

    default:
      return styles.sButtonNormal
  }
}

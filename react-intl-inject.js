import { injectIntl } from 'react-intl'

export default injectIntl(({ children, ...props }) => {
  if (typeof children === 'function') {
    return (
      children(props)
    )
  } else {
    return null
  }
})

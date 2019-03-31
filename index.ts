// http://g14n.info/react-intl-inject
// License: MIT
import { injectIntl } from 'react-intl'

export default function reactIntlInject ({ children, ...props }) {
  if (typeof children === 'function') {
    return (
      children(props)
    )
  } else {
    return null
  }
}

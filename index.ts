// http://g14n.info/react-intl-inject
// License: MIT
import { injectIntl } from 'react-intl'

function reactIntlInject ({ children, ...props }) {
  if (typeof children === 'function') {
    return (
      children(props)
    )
  } else {
    return null
  }
}

export default injectIntl(reactIntlInject)

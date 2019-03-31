# react-intl-inject

> react-intl helper, can translate props easily

## Installation

Make sure [react-intl] is installed, it is required as a peer dependency

```bash
npm i react-intl
```

Then install as usual

```bash
npm i react-intl-inject
```

## Usage

Suppose you need to translate a prop, for instance the `value` of a submit button.

```javascript
import React, { Component } from 'react'
import InjectIntl from 'react-intl-inject'

class MyComponent extends Component {
  render () {
    return (
      <InjectIntl>
        {({ intl }) => (
          <button
            type='submit'
            value={intl.formatMessage({ id: 'enter.submit' })}
          />
        )}
      </InjectIntl>
    )
  }
}
```

## License

[MIT](http://g14n.info/mit-license)

[react-intl]: https://github.com/yahoo/react-intl "yahoo/react-intl"

# socrates-container

[![npm package][npm-badge]][npm]

*socrates-container* is a simple extension to the standard React `component` class to simplify unwrapping
a Socrates-based Redux store in React container components.

```
npm install -s socrates-container
```

```javascript
import SocratesContainer from './SocratesContainer';

import SomeComponent from 'SomeComponent';

class App extends SocratesContainer {

  componentWillMount () {
    super.componentWillMount();
  }

  /**
   * { this.props.store }
   * The Socrates store.
   *
   * { this.state.store }
   * The unwrapped Socrates store that updates on subscribe changes.
   */
  render () {
    return (
      <div className = "container-app">
        <SomeComponent store = { this.state.store } />
      </div>
    );
  }
}
```

[npm-badge]: https://img.shields.io/npm/v/npm-package.svg?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

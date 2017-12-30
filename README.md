## StateMonitor

StateMonitor is a react component that works with causality-redux to monitor causality-redux state changes.

StateMonitor allows you to rewind states, single step through states and then set the redux store to a particular state.

For state changes made by causality-redux, it also allows you to display the line number and source module where the state change took place.

Simply download it and place it in your source tree. Then include the component StateMonitor in your react tree. In production mode, the monitor is not displayed. See the examples below.
```javascript
// Typescript project example.
import { StateMonitor, handleTSSourceMaps } from '../StateMonitor'

// Note that handleTSSourceMaps must be called for Typescript projects.
// This file is HMR loaded on each change so this function is called at
// init time and also with each HMR.
handleTSSourceMaps()

// This exists in all caudality-redux projects.
const MainApp = () =>
  <div>
    <StateMonitor />
    <Counter />
  </div>

```

```javascript
// Javascript project example.
import { StateMonitor } from '../StateMonitor'

const MainApp = () =>
  <div>
    <StateMonitor />
    <Counter />
  </div>

```

The monitor will default to off when tests are run or in production mode. In order to turn it off for any other case, set showMonitor to false in the file index.js.
## StateMonitor

StateMonitor is a react component that works with causality-redux to monitor causality-redux state changes.

StateMonitor allows you to rewind states, single step through states and then set the redux store to a particular state.

For state changes made by causality-redux, it also allows you to display the line number and source module where the state change took place.

Simply download it and place it in your source tree. Then include the component StateMonitor in your react tree. In production mode, the monitor is not displayed.

The monitor will default to off when tests are run or in production mode. In order to turn it off for any other case, set showMonitor to false in the file index.js.
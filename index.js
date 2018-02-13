import * as React from 'react'
import causalityRedux from 'causality-redux'

// Set this to false to turn off the monitor.
let showMonitor = true

if (showMonitor && causalityRedux.store[causalityRedux.globalDataKey].getState()['history']) {
  alert('The state monitor is not compatible with the react router in time travel history mode.')
  showMonitor = false
}

let StateMonitor
let handleTSSourceMaps
if (!showMonitor || process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'mochaTesting') {
  class NullComponent extends React.Component {
    render () {
      return null
    }
  }
  StateMonitor = NullComponent
  handleTSSourceMaps = () => { }
} else {
  const controller = require('./controller/setup')
  StateMonitor = controller.default
  handleTSSourceMaps = controller.handleTSSourceMaps
}

export { StateMonitor, handleTSSourceMaps }

import React, { Component } from 'react'
import {Provider} from 'react-redux'

import Counter  from './Counter'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Counter/>
        </Provider>
      </div>
    )
  }
}

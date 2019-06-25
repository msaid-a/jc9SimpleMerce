import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import reducers from './reducers'

import App from './components/App'

const STORE = createStore(reducers)

ReactDOM.render(
    <Provider store={STORE}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
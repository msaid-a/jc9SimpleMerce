import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Register from './Register'
import Login from './Login'
import Home from './Home'
import Header from './Header'
import ManageProduct from './ManageProduct'

// localhost:3000/register

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* <Route path="/" component={Home}/> */}
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/manageproduct" component={ManageProduct}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
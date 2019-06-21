import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {

    onButtonClick = () => {
        const user = this.username.value
        const email = this.email.value
        const pass = this.password.value

        // GET, axios.get, request data
        // axios.get(
        //     'http://localhost:2019/users',
        //     {
        //         params: {
        //             username: 'rochafi'
        //         }
        //     }
        // ).then( res => {
        //     console.log(res)
        // }).catch( err => {
        //     console.log(err)
        // })

        // POST, axios.post, post / menaruh data

        // axios.post(
        //     'http://localhost:2019/users',
        //     {
        //         username: user,
        //         email: email,
        //         password: pass
        //     }
        // ).then( (res) => {
        //     console.log('Data berhasil di input')
        //     console.log(res)
        // }).catch( (err) => {
        //     console.log('Gagal post data')
        //     console.log(err)
        // })

    }

    render() {
        return (
            <div>

                <div className = 'mt-5 row'>
                    <div className = 'col-sm-4 mx-auto card'>
                        <div className = 'card-body'>
                            <div className = ' border-bottom border-secondary card-title'>
                                <h1>Register</h1>
                            </div>

                            <div className='card-title'>
                                <h4>Username</h4>
                            </div>
                            <form className='input-group'>
                                <input className='form-control' type='text'
                                    ref={(input) => {this.username = input}}
                                />
                            </form>

                            <div className='card-title'>
                                <h4>Email</h4>
                            </div>
                            <form className='input-group'>
                                <input className='form-control'
                                    ref={(input) => {this.email = input}}
                                />
                            </form>

                            <div className='card-title'>
                                <h4>Password</h4>
                            </div>
                            <form className='input-group'>
                                <input className='form-control' type='password'
                                    ref={(input) => {this.password = input}}
                                />
                            </form>

                            <button onClick={this.onButtonClick} className='btn btn-success'>Click for Register</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Register
// Action Creator
import axios from 'axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

export const onLoginUser = (user, pass) => {
    return (dispatch) => { // dispatch adalah function
        axios.get(
            'http://localhost:2019/users',
            {
                params: {
                    username: user,
                    password: pass
                }
            }
        ).then(res => {
            // res.data = [], jumlah isi array menggunakan length
            if(res.data.length > 0){

                const {id, username} = res.data[0]

                // Kirim action ke reducer, untuk disimpam username
                dispatch(
                    {
                        type: "LOGIN_SUCCESS",
                        payload: {id,username}
                    }
                )

                // Create data untuk cooki
                cookie.set('userName', username)
            } else {
                console.log('Username / Password incorrect')
            }
        })
    }

}

export const onLogoutUser = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

// Action Creator
import axios from 'axios'

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
                dispatch(
                    {
                        type: "LOGIN_SUCCESS",
                        payload: {
                            id: res.data[0].id,
                            username: res.data[0].username
                        }
                    }
                )
            } else {
                console.log('Username / Password incorrect')
            }
        })
    }

}
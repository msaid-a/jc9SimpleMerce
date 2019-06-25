import { combineReducers } from 'redux'

const init = {
    id: '',
    username: ''
}

const AuthReducer = (data = init, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            // do something
            break;
    
        default:
            return data
    }
}

export default combineReducers(
    {
        auth: AuthReducer // {id: '', username: ''}
    }
)
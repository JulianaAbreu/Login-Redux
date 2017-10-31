const initialState = {
    isAuthenticated: false,
    user: [],
    email: '',
    password: '',
    error: ''
}
import { FETCH_SOMETHING} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_SOMETHING:
        return [ action.payload.data, ...state ];
    }

    return state;
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH:
            // ...state in case you have other parts of your state which should remain untouched
            return { ...state, isAuthenticated: true, email: action.payload.email, password: action.payload.password } // could also just do ...action.payload as the third object value instead of username: blah, role: blah
        case ADD_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}
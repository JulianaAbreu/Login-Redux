import axios from 'axios'

export const login = (email, password) => (dispatch) => {
    axios.post('https://private-d5cad-teste594.apiary-mock.com/login/', { email, password })
        .then((response => { console.log('response;', response)
            const { email, password} = response.data
            dispatch(addAuth(email, password)) // this action will be handled by your redux auth reducer
            console.log('aqui')// to redirect
        })).catch(error => {
            console.log('erro')
            dispatch(addError(error))
        })
} 

export const addAuth = (email, password) => ({
    type: 'ADD_AUTH',
    payload: { email, password }
})

export const addError = error => ({
    type: 'ADD_ERROR',
    payload: error
})
export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth: action.payload }
        case 'LOGIN_ERROR':
            return { ...state, authError: action.payload }
        default:
            return state
    }
}
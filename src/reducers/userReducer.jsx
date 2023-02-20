export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return { ...state, user: action.payload }
        case 'FETCH_USER_ERROR':
            return { ...state, userError: action.payload }
        case 'TOGGLE':
            return { ...state, toggleModal: action.payload }
        default:
            return state
    }
}
export const MenuReducer = (state, action) => {
    switch (action.type) {
        case 'REQUEST_MENU':
            return { ...state, menu: action.payload }
        case 'REQUEST_ERROR':
            return { ...state, requestError: action.payload }
    }
}
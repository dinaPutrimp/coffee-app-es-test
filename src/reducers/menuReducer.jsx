export const MenuReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_MENU':
            return { ...state, menu: action.payload }
        case 'FETCH_MENU_ERROR':
            return { ...state, requestError: action.payload }
    }
}
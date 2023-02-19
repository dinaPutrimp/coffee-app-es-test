import { createContext, useReducer } from "react";
import { MenuReducer } from "../reducers/menuReducer";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
    const initialState = {
        menu: {},
        requestError: null
    }
    const [menu, dispatchMenu] = useReducer(MenuReducer, initialState);
    return (
        <MenuContext.Provider value={{ menu, dispatchMenu }}>
            {props.children}
        </MenuContext.Provider>
    );
}

export default MenuContextProvider;
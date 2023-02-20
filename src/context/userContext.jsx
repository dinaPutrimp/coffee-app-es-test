import { createContext, useReducer } from "react";
import { UserReducer } from "../reducers/userReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const initialState = {
        user: {},
        toggleModal: false,
        userError: null
    }
    const [user, dispatchUser] = useReducer(UserReducer, initialState);
    return (
        <UserContext.Provider value={{ user, dispatchUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
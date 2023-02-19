import { createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/authReducer";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const initialState = {
        auth: {},
        authError: null
    }
    const [auth, dispatchAuth] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{ auth, dispatchAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
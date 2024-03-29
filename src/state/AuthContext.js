import { children, createContext, useEffect, useReducer } from "react";
import AuthReducer from './AuthReducer';

//最初のユーザーの状態を定義
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    // user: {
    //     _id: "65b22e240d5d06f657c9c95e",
    //     username: "kento",
    //     email: "123456@japan.com",
    //     password: "123456",
    //     profilePicture: "/person/1.jpeg",
    //     coverPicture: "",
    //     followers:[],
    //     followings: [],
    //     isAdmin: false,
    //   },
      isFetching: false,
      error: false,
};

//状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    },[state.user])

    return (<AuthContext.Provider
    value={{
        user: state.user,
        isFetching: state.isFetching,
         error: state.error,
         dispatch,
    }} >
        {children}
    </AuthContext.Provider>
    );
};
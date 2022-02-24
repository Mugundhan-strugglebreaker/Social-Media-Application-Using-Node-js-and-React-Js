import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user : {
        _id:"620e4f098afb9e69547ab349",
        username:"MugundhanS",
        email:"18euit084@skcet.ac.in",
        password:"$2b$10$iXaIx3Ij4MzA4XXPqEvz.eF.AOS5szYPUkUo6lnwbAJm42fZgagDe",
        profilePicture:"",
        coverPicture:"",
        followers:[],
        followings:[],
        isAdmin:false
     },
    isFetching : false,
    error : false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider value={{
            user : state.user,
            isFetching : state.isFetching,
            error : state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}
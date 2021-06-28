import { combineReducers } from "redux";
import { bankingReducer } from "./bankingReducer";
import { authReducer } from "./authReducer";

export const rootReducer=combineReducers({
    authentication:authReducer,
    banking:bankingReducer
})

//store
// {
//     authentication:{
//         isLoggedIn:false
//     },
//     banking:{
//         balance:0,
//         isSavings:true,
//         isCurrent:true
//     }
// }
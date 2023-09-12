import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";


export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})



// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./Slice";


// export const store = configureStore({
//     reducer: {
//         todo: todoReducer
//     }
// })
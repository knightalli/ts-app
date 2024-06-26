import { configureStore } from '@reduxjs/toolkit'
import editorID from "./editorID.ts";
import editorIsLogin from "./editorIsLogin.ts";
import editorUser from "./editorUser.ts";

export const store = configureStore({
    reducer: {
        editor: editorID,
        isLogin: editorIsLogin,
        user: editorUser,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IsLoginState {
    value: boolean,
    token: string,
}

const isLogin = localStorage.getItem('"QpwL5tke4Pnpja7X4"');
const isLoginValue:boolean = isLogin ? true : false;

const initialState: IsLoginState = {
    value: isLoginValue,
    token: '',
}

export const editorIsLogin = createSlice({
    name: 'editorIsLogin',
    initialState,
    reducers: {
        setIsLogin: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
        setStoreToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
})

export const { setIsLogin, setStoreToken } = editorIsLogin.actions

export default editorIsLogin.reducer
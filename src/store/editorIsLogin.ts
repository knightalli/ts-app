import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IsLoginState {
    value: boolean
}

const initialState: IsLoginState = {
    value: false,
}

export const editorIsLogin = createSlice({
    name: 'editorIsLogin',
    initialState,
    reducers: {
        setIsLogin: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
})

export const { setIsLogin } = editorIsLogin.actions

export default editorIsLogin.reducer
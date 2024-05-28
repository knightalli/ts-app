import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IUser} from "../interfaces/user-interface.tsx";

export interface UserState {
    value: IUser
}

const user = localStorage.getItem('"QpwL5tke4Pnpja7X4"');
const loginUser:IUser = user ? JSON.parse(user) : false;

const initialState: UserState = {
    value: loginUser,
}

export const editorUserSlice = createSlice({
    name: 'editorId',
    initialState,
    reducers: {
        editUser: (state, action: PayloadAction<IUser>) => {
            state.value = action.payload;
        }
    },
})

export const { editUser } = editorUserSlice.actions

export default editorUserSlice.reducer
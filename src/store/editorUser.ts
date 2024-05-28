import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IUser} from "../interfaces/user-interface.tsx";

export interface UserState {
    value: IUser
}

const initialState: UserState = {
    value: {
        name: '',
        email: '',
        password: '',
    },
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
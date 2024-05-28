import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IdState {
    value: number
}

const initialState: IdState = {
    value: 0,
}

export const editorIdSlice = createSlice({
    name: 'editorId',
    initialState,
    reducers: {
        edit: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    },
})

export const { edit } = editorIdSlice.actions

export default editorIdSlice.reducer
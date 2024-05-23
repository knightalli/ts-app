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
        },
        setToZero: (state) => {
            state.value = 0;
        },
    },
})

export const { edit, setToZero } = editorIdSlice.actions

export default editorIdSlice.reducer
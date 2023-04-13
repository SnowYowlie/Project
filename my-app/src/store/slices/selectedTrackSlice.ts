import { createSlice } from "@reduxjs/toolkit"
import { Items } from "../../types/playlist";

type InitialState = {
    track: null | Items
}

const initialState = {
    track: null
} as InitialState


const selectedTrackSlice = createSlice({
    name: 'selectedTrack',
    initialState,
    reducers: {
        selectTrack: (state, {payload}) => {
            state.track = payload
        }
    }
})

export default selectedTrackSlice.reducer;

export const {selectTrack} = selectedTrackSlice.actions;
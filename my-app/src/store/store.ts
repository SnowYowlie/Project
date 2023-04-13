import {configureStore} from '@reduxjs/toolkit'
import selectedTrackSlice from './slices/selectedTrackSlice'

const store = configureStore({
  reducer: {
    selectedTrack: selectedTrackSlice
  }
}) 

export type RootState = ReturnType<typeof store.getState>

export default store
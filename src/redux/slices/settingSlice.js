import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  settings: null,
  appearance: null,
  loading: false,
  error: null,
}

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSettings: (state, action) => {
      state.settings = action.payload
    },
    setAppearance: (state, action) => {
      state.appearance = action.payload
    },
    setSettingLoading: (state, action) => {
      state.loading = action.payload
    },
    setSettingError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setSettings, setAppearance, setSettingLoading, setSettingError } = settingSlice.actions

export default settingSlice.reducer

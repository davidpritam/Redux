import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'light'
    },
    reducers: {
        changeThemeToLight: (state)=>{
            state.mode = 'light'
        },
        changeThemeToDark: (state)=>{
            state.mode = 'dark'
        }
    }
})

export const { changeThemeToLight, changeThemeToDark } = themeSlice.actions
export default themeSlice.reducer
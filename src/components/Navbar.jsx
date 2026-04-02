import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeToDark, changeThemeToLight } from '../redux/slices/themeSlice'

const Navbar = () => {
    const theme = useSelector( (state)=> state.theme.mode)
    const dispathch = useDispatch()
  return (
    <div>
      <h1>The current theme is : {theme}</h1>
      <button onClick={()=>{
        dispathch(changeThemeToLight())
      }} >Light Theme</button>
      <button onClick={()=>{
        dispathch(changeThemeToDark())
      }} >Dark Theme</button>
    </div>
  )
}

export default Navbar

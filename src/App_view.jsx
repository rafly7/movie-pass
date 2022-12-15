import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail"

export const AppView = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/:slug' element={<Detail/>}/>
    </Routes>
  )
}
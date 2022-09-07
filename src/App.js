import React from "react"
import SearchPage from "./Pages/SearchPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import InfoPage from "./Pages/InfoPage"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/profile_Finder/' element={<SearchPage />} />
                <Route path='/userInfo/:id' element={<InfoPage />} />
            </Routes>
        </BrowserRouter>
    )
}
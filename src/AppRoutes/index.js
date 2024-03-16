import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import NotFound from '../Pages/Not Found'
import Msg from '../Pages/Msg'

export default function Approutes() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/t' element={<h1>Hello world</h1>} />
            <Route path='/d' element={<Msg />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

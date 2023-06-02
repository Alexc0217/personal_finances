import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/index'
import React from 'react'

const Router = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="*" element={
                    <div>
                        <h2>Error 404 Page not found</h2>
                    </div>
                    }
                />
            </Routes>
        </BrowserRouter>
  )
}

export default Router

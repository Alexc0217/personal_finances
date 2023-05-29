import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from './pages/index'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth/>} />
                <Route path="*" element={
                    <div>
                        <h2>Error 404 Page not found</h2>
                    </div>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
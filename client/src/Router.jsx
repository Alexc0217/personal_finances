import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<></>} />
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
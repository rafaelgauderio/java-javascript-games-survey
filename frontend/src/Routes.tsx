import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const ApplicationRoutes = () => {
    return (
        <>
            <Header></Header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </>
    );
}
export default ApplicationRoutes;
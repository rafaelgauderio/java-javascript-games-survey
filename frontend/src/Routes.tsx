import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Records from './pages/Records';

const ApplicationRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/records" element={<Records />} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>

        </>
    );
}
export default ApplicationRoutes;
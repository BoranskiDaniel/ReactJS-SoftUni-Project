import { Routes, Route } from 'react-router-dom';

import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Loader from "./components/Loader" ;
import Products from "./components/Products";
import RegisterModal from "./components/registerModal/RegisterModal";
import LoginModal from "./components/loginModal/LoginModal";
import SliderSection from "./components/SliderSection";
import Testimonial from "./components/Testimonial";
import AddProduct from "./components/addProduct/AddProduct";

function App() {

    return (
        <div className="main-layout ">
            {/* <Loader /> */}
            <Header />

            <Routes>

                <Route path='/' element={<SliderSection />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/testimonial' element={<Testimonial />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/login' element={<LoginModal />} />
                <Route path='/register' element={<RegisterModal />} />
                <Route path='/addProduct' element={<AddProduct />} />

                {/* add Map ! */}
            </Routes>

            <Footer />
        </div>
    )
}

export default App

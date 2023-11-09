import { Routes, Route } from 'react-router-dom';

import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Loader from "./components/Loader" ;
import Products from "./components/Products";
// import RegisterForm from "./components/registerForm/RegisterForm" ;
import LoginModal from "./components/loginModal/LoginModal";
import SliderSection from "./components/SliderSection";
import Testimonial from "./components/Testimonial";

function App() {

    return (
        <div className="main-layout ">

            {/* <RegisterForm /> */}
            {/* <Loader /> */}
            <Header />



            <Routes>

                <Route path='/' element={<SliderSection />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/testimonial' element={<Testimonial />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/login' element={<LoginModal />} />

                {/* add Map ! */}
            </Routes>
            <Footer />
        </div>
    )
}

export default App

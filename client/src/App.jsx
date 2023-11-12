import { Routes, Route } from 'react-router-dom';

import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Loader from "./components/Loader" ;
import Products from "./components/Products";
import RegisterForm from "./components/registerForm/RegisterForm";
import LoginForm from "./components/loginForm/LoginForm";
import SliderSection from "./components/SliderSection";
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
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/register' element={<RegisterForm />} />
                <Route path='/addProduct' element={<AddProduct />} />

                {/* add Map ! */}
            </Routes>

            <Footer />
        </div>
    )
}

export default App

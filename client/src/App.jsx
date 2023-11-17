import { Routes, Route } from 'react-router-dom';

import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import Loader from "./components/Loader" ;
import Products from "./components/products/Products";
import RegisterForm from "./components/registerForm/RegisterForm";
import LoginForm from "./components/loginForm/LoginForm";
import SliderSection from "./components/header/SliderSection";
import AddProduct from "./components/addProduct/AddProduct";
// import Order from './components/order/Order';

function App() {

    return (
        <div className="main-layout">
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
                {/* <Route path='/products/order' element={<Order />} /> */}

                {/* add Map ! */}
            </Routes>

            <Footer />
        </div>
    )
}

export default App

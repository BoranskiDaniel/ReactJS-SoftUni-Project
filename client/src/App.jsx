import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";

import * as authService from "./services/authService";
import AuthContext from './contex/AuthContext';

import About from "./components/about/About";
import MyProducts from "./components/myProducts/MyProducts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import RegisterForm from "./components/registerForm/RegisterForm";
import LoginForm from "./components/loginForm/LoginForm";
import SliderSection from "./components/header/SliderSection";
import AddProduct from "./components/addProduct/AddProduct";
import Logout from './components/Logout';
// import Loader from "./components/Loader" ;

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password)

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        console.log(result.accessToken);

        navigate('/')
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password);
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/')
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken')
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }
    return (
        <AuthContext.Provider value={values}>
            <div className="main-layout">
                {/* <Loader /> */}
                <Header />

                <Routes>

                    <Route path='/' element={<SliderSection />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/myProducts' element={<MyProducts />} />
                    <Route path='/addProduct' element={<AddProduct />} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/register' element={<RegisterForm />} />
                    <Route path='/logout' element={<Logout />} />

                    {/* add Map ! */}
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    )
}


export default App

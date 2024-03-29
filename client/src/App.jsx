import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";

import * as authService from "./services/authService";
import * as productService from "./services/productService";
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
import NotFound from './components/notFound/notFound';
import EditProduct from './components/editProduct/EditProduct';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';

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
        localStorage.removeItem('accessToken');
    }

    const productCreateHandler = async (productData) => {
        try {
            const result = await productService.create({ ...productData })
            // setAuth(result);
            // localStorage.setItem('accessToken', result.accessToken);
            navigate('/products')
        } catch (error) {
            throw new Error(`${error}`)
        }
    }


    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        productCreateHandler,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }
    return (
        <ErrorBoundary>
            <AuthContext.Provider value={values}>
                <div className="main-layout">
                    <Header />
                    <Routes>
                        <Route path='/' element={<SliderSection />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/login' element={<LoginForm />} />
                        <Route path='/register' element={<RegisterForm />} />
                        <Route path='/*' element={<NotFound />} />

                        <Route element={<AuthGuard />}>
                            <Route path='/myProducts' element={<MyProducts />} />
                            <Route path='/addProduct' element={<AddProduct />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/products/:productId/edit' element={<EditProduct />} />

                        </Route>

                    </Routes>

                    <Footer />
                </div>
            </AuthContext.Provider>
        </ErrorBoundary>
    )
}


export default App

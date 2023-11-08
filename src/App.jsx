import About from "./components/About"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import ForBox from "./components/ForBox"
import Header from "./components/Header"
// import Loader from "./components/Loader"
import Offer from "./components/Offer"
import Products from "./components/Products"
// import RegisterForm from "./components/registerForm/RegisterForm"
import LoginForm from "./components/loginForm/LoginForm"
import SliderSection from "./components/SliderSection"
import Testimonial from "./components/Testimonial"

function App() {

  return (
    <div className="main-layout ">
      <LoginForm />
      {/* <RegisterForm /> */}
      {/* <Loader /> */}
      <Header />
      <SliderSection />
      <About />
      <ForBox />
      <Offer />
      <Products />
      <Testimonial />
      <Contacts />
      {/* add Map ! */}
      <Footer />
    </div>
  )
}

export default App

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] h-14">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/ecommerce-website" element={<Home />} />
        <Route path="/ecommerce-website/collection" element={<Collection />} />
        <Route path="/ecommerce-website/about" element={<About />} />
        <Route path="/ecommerce-website/contact" element={<Contact />} />
        <Route
          path="/ecommerce-website/product/:productId"
          element={<Product />}
        />
        <Route path="/ecommerce-website/cart" element={<Cart />} />
        <Route path="/ecommerce-website/login" element={<Login />} />
        <Route path="/ecommerce-website/place-order" element={<PlaceOrder />} />
        <Route path="/ecommerce-website/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

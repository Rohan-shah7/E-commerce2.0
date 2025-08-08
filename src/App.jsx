import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/Detail/ProductDetail"
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import LoginPage from "./Authentication/LoginPage";
import ErrorPage from "./Pages/ErrorPage";
import Register from "./Authentication/Register";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        
        {/* Catch all route should be last */}
        <Route path="*" element={<ErrorPage />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


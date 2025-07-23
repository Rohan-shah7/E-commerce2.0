import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/Detail/ProductDetail"
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import LoginPage from "./Authentication/LoginPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


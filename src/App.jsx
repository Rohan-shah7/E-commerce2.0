import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/Detail/ProductDetail"
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
   <>
    <NavBar/>
   <Router>
   <Routes>
   <Route path="/" element={<Product />} />
   <Route path="/product/:id" element={<ProductDetails />} />
   
   </Routes>
   </Router>
   <Footer />
   </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/Detail/ProductDetail"
import NavBar from "./Components/NavBar";

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
   </>
  );
}

export default App;

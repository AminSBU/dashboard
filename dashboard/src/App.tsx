import Home from "./pages/home/Home";
import Users from "./pages/users/Users.tsx";
import Products from "./pages/products/Products.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Menu from "./components/menu/Menu.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const Layout = () =>{
    return(
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer"></div>
        </div>
        <Footer />
      </div>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Brands from "./pages/Brands";
import { Toaster } from "./components/ui/toaster";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <main className="min-h-[60vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/boutique" element={<Shop />} />
              <Route path="/produit/:id" element={<ProductDetail />} />
              <Route path="/panier" element={<Cart />} />
              <Route path="/paiement" element={<Checkout />} />
              <Route path="/marques" element={<Brands />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContianer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from "./components/CartContext/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={
                <ItemListContainer />
              }
            />
            <Route 
              path="/category/:idColl" 
              element={
                <ItemListContainer />
              }
            />
            <Route 
              path="/detail/:detailId"
              element={<ItemDetailContianer />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route 
              path="/*" 
              element={<Navigate to="/" />}
            />
          </Routes>
          </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

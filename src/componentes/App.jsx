import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { getProductos } from "../firebase/firebase";

import Navbar from './Navbar/Navbar';
import Footer from "./Footer/Footer";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Contacto from "./Contacto/Contacto";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
//Contexto
import { DarkModeProvider } from "../context/DarkModeContext";
import { CarritoProvider } from "../context/CarritoContext";



function App() {

  //cargarBDD()
  //getProductos()

  return (

    <div>
      
      <>
      <BrowserRouter>
        <CarritoProvider>
            <DarkModeProvider>
                <Navbar/>
                  <Routes>
                    <Route path = "/" element={<ItemListContainer/>}/>
                    <Route path = "/item/:id" element = {<ItemDetailContainer/>}/>
                    <Route path = "/category/:idCategoria" element = {<ItemListContainer/>}/>
                    <Route path = "/contacto" element={<Contacto/>}/>
                    <Route path = "/cart" element={<Cart/>}/>
                    <Route path = "/checkout" element={<Checkout/>}/>
                  </Routes>
                  <Footer/>
              <ToastContainer/>
              </DarkModeProvider>
        </CarritoProvider>

      </BrowserRouter>
          
      </>
    </div>
  
  );
}

export default App;

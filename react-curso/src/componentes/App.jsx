import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (

    <div>
      
      <>
      <BrowserRouter>
          
          <Navbar/>
          
          <Routes>
            <Route path = "/" element={<ItemListContainer/>}/>
            <Route path = "/item/:id" element = {<ItemDetailContainer/>}/>
            <Route path = "/category/:idCategoria" element = {<ItemListContainer/>}/>
          </Routes>
          
      </BrowserRouter>
          
      </>
    </div>
  
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
            <Route path='/' element={<ItemListContainer texto="Bienvenidos a mi Tienda" />} />
            <Route path='/category/:categoryId' element={<ItemListContainer texto="Seccion: " />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>

      </CartProvider>
    </BrowserRouter>
  )
}

export default App

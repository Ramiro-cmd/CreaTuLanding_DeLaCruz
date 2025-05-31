import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<ItemListContainer texto="Bienvenidos a mi Tienda" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer texto="Seccion: " />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          
      </Routes>


    </BrowserRouter>
  )
}

export default App

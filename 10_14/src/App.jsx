import Login from './components/Login'
import './App.css'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import ProductsDatails from './pages/ProductsDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/produtos' element={<Products />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/produtos/:name' element={<ProductsDatails />} />
      </Routes>
    </>
  )
}

export default App

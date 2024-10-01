import './App.css'
import NavBar from './components/Navbar'

function App() {
  
  const nome = 'João'

  return (
    <>
      <h1>Primeira página ReactJS</h1>
      
      <h2>Nome da variável: {nome}</h2>
      
      <NavBar />

    </>
  )
}

export default App

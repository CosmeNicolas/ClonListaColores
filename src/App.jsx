import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container} from 'react-bootstrap'
import FormularioColores from './components/FormularioColores';
import ListaColores from './components/ListaColores';
import Footer from './components/Footer'

function App() {


  return (
    <>
     <Container fluid className="main">
        <h1 className='color text-center mt-5'>🖌️Color List 🎨</h1>
        <FormularioColores/>
        <ListaColores />
     </Container>
     <Footer/>
    </>
  )
}

export default App

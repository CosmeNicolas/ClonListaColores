import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap"
import ListaColores from './ListaColores'


const FormularioColores = () => {
  const [color, setColor] = useState('')
  const coloresGuardados = JSON.parse(localStorage.getItem('guardarColor')) || []
  const [colores, setColores] = useState(coloresGuardados) 


  const borraColor = (nombreColor)=> {
   const  obtenerColor = colores.filter((color)=> color !== nombreColor);
    setColores(obtenerColor)
    }

    useEffect(() => {
     localStorage.setItem('guardarColor',JSON.stringify(colores))
    }, [colores])
    

  const handleSubmit = (e) =>{
    e.preventDefault()
    setColores([...colores, color])
    setColor('')
  }



  return (
     <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label className="display-5">Administrar Colores</Form.Label>
          <Form.Control type="text" 
          placeholder="Ingrese un color: Ej Rojo"
          minLength={3} 
          maxLength={15}
          onChange={(e)=>setColor(e.target.value)}
          value={color}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Guardar
        </Button>
      </Form>
      <ListaColores colores={colores} borrarColor={borraColor} />
     </>
  )
};

export default FormularioColores;
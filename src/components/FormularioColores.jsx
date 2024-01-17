import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap"
import ListaColores from './ListaColores'
import Swal from 'sweetalert2'


const FormularioColores = () => {
  const [color, setColor] = useState('')
  const coloresGuardados = JSON.parse(localStorage.getItem('guardarColor')) || []
  const [colores, setColores] = useState(coloresGuardados)


  const borraColor = (nombreColor) => {
    const obtenerColor = colores.filter((color) => color !== nombreColor);
    setColores(obtenerColor)
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Color Borrado con éxito',
    })
  }

  useEffect(() => {
    localStorage.setItem('guardarColor', JSON.stringify(colores))
  }, [colores])


  const handleSubmit = (e) => {
    e.preventDefault()

    if(color.trim('') === ''){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un color en ingles',
      });
      return
    }

    setColores([...colores, color])
    setColor('')

    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Color agregado con éxito',
    })

  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label className="display-5 text-light">Colour Palette</Form.Label>
          <Form.Control type="text"
            placeholder="Ingrese un color en Inglés: Ej red"
            minLength={3}
            maxLength={15}
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="dark" type="submit" className="button">
            Guardar Color
          </Button>
        </div>
      </Form>
      <ListaColores colores={colores} borrarColor={borraColor} />
    </>
  )
};

export default FormularioColores;
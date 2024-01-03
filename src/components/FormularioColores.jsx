import { Form, Button } from "react-bootstrap"

const FormularioColores = () => {
  return (
    
     <>
      <Form>
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label className="display-5">Administrar Colores</Form.Label>
          <Form.Control type="text" 
          placeholder="Ingrese un color: Ej Rojo" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Guardar
        </Button>
      </Form>
     </>
    
  )
};

export default FormularioColores;
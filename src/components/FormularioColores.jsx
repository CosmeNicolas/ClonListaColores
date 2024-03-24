import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import Swal from "sweetalert2";
import { crearColorAPI, leerColoresAPI } from "./helpers/queries.js";

const FormularioColores = () => {
  const [colores, setColores] = useState([]);
  const [nuevoColor, setNuevoColor] = useState("");

  useEffect(() => {
    leerColoresInicio();
  }, []);

  const leerColoresInicio = async () => {
    try {
      const respuesta = await leerColoresAPI();
      if (respuesta.status === 200) {
        const coloresAPIinicio = await respuesta;
        setColores(coloresAPIinicio);
      }
      const coloresAPIinicio = await respuesta;
      setColores(coloresAPIinicio);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nuevoColor.trim("") === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, ingresa un color en ingles",
      });
      return;
    }

    try {
      const respuesta = await crearColorAPI(nuevoColor);
      if (respuesta.status === 201) {
        const coloresCargados = await leerColoresAPI();
        setColores(coloresCargados);
        setNuevoColor("");
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Color agregado con éxito",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al guardar el color",
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label className="display-5 text-light">
            Colour Palette
          </Form.Label>
          <Form.Control
            type="text"
            name="nombreColor"
            placeholder="Ingrese un color en Inglés: Ej red, código hexadecimal , RGB o RGBA"
            minLength={3}
            maxLength={15}
            value={nuevoColor}
            onChange={(e) => setNuevoColor(e.target.value)}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="dark" type="submit" className="button">
            Guardar Color
          </Button>
        </div>
      </Form>
      <ListaColores colores={colores} setColores={setColores} />
    </>
  );
};

export default FormularioColores;

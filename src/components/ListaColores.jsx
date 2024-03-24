import { Button, Card, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarColorAPI, leerColoresAPI } from "./helpers/queries.js";

const ListaColores = ({ colores, setColores }) => {
  console.log(colores);
  const borrarColor = async (id) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el Color?",
      text: "No puedes revertir este proceso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarColorAPI(id);
        if (respuesta.status === 200) {
          const colorActualizados = await leerColoresAPI();
          setColores(colorActualizados);
          Swal.fire({
            title: "Color eliminado",
            text: `El Color fue eliminado correctamente`,
            icon: "success",
          });
          setColores(colorActualizados);
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El Color no fue eliminado, intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <>
      <Container fluid className="d-flex flex-wrap justify-content-center">
        {colores.map((color) => (
          <Card className="mt-5 mx-2 mb-3" key={color._id}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="text-center">
                {color.nombreColor}
              </Card.Title>
              <div
                className="text-center box"
                style={{ backgroundColor: color.nombreColor, padding: "10px" }}
              ></div>
              <div className="text-end">
                <Button
                  onClick={() => borrarColor(color._id)}
                  className="mt-2"
                  variant="danger"
                >
                  Borrar
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default ListaColores;

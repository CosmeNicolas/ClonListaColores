import { Button, Card, Container} from "react-bootstrap";

const ListaColores = ({colores, borrarColor}) => {
  return (
    <>
      <Container fluid className="d-flex flex-wrap justify-content-center">
        {
          colores.map((itemColor, posicionColor) =>
            <Card className="mt-5  mx-2 mb-3" key={posicionColor}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="text-center"  >{itemColor}</Card.Title>
                <div className="text-center box" style={{ backgroundColor: itemColor, padding: '10px' }}></div>
                <div className="text-end">
                  <Button onClick={() => borrarColor(itemColor)} className="mt-2" variant="danger">
                  Borrar
                </Button>
              </div> 
              </Card.Body>
            </Card>)
        }
      </Container>
    </>
  );
};

export default ListaColores;
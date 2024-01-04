import { Button, Card, Container } from "react-bootstrap";

const ListaColores = () => {
  return (
    <Container className="d-flex flex-wrap">
      <Card className="mt-5  mx-2">
        <Card.Body>
          <Card.Title className="text-center">Nombre Color</Card.Title>
          <div className="text-center">
            <p className="p ms-5"></p>
          </div>
          <div className="text-end">
          <Button className="mt-2" variant="danger">
            Borrar
          </Button>
        </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ListaColores;
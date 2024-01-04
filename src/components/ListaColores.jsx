import { Button, Card, Container } from "react-bootstrap";

const ListaColores = ({colores}) => {
  return (
    <Container className="d-flex flex-wrap">

        {
          colores.map((itemColor, posicionColor)=>
            <Card className="mt-5  mx-2" >
              <Card.Body>
                <Card.Title className="text-center" key={posicionColor} >{itemColor}</Card.Title>
                <div className="text-center">
                  <p className="p ms-5"></p>
                </div>
                <div className="text-end">
                <Button className="mt-2" variant="danger">
                  Borrar
                </Button>
              </div> 
              </Card.Body>
            </Card>)
        }



    </Container>
  );
};

export default ListaColores;
import { Button, Card, Container } from "react-bootstrap";

const ListaColores = ({colores, borrarColor}) => {
  return (
    <>
  
    <Container className="d-flex flex-wrap">

        {
          colores.map((itemColor, posicionColor)=>
            <Card className="mt-5  mx-2" >
              <Card.Body>
                <Card.Title className="text-center" key={itemColor} >{itemColor}</Card.Title>
                <div className="text-center">
                  <p className="p ms-5"></p>
                </div>
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
import { Button, Card } from "react-bootstrap";

const ListaColores = ({colores, borrarColor}) => {
  return (
    <>
        {
  
          colores.map((itemColor, posicionColor)=>
  

            <Card className="mt-5  mx-2" key={posicionColor}>
              <Card.Body>
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
  
    </>
  );
};

export default ListaColores;
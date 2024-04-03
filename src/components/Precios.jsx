import { Accordion } from "react-bootstrap";

export default function Navigation() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pizza - Básica Mediana</Accordion.Header>
        <Accordion.Body>
          3 ingredientes por solo $9.000 CLP
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Pizza - Mejorada Familiar</Accordion.Header>
        <Accordion.Body>
          5 ingredientes por solo $14.500 CLP, habitación privada
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Pizza - Súper Premium</Accordion.Header>
        <Accordion.Body>
          Todos los ingredientes a elección por tan sólo $18.000 CLP
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

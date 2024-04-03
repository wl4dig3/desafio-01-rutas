import { Container } from "react-bootstrap";

import Planes from "../components/Precios";

const Pizzas = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Tenemos pizzas especiales para ti</h1>
      <Planes />
    </Container>
  );
};

export default Pizzas;


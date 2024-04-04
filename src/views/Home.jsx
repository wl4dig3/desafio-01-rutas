import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">QuieroPizza</span> 🍕
      </h1>
      <h6> La mejor pizza al horno a leña de la región </h6>
      <img
        className="mt-5"
        src="	
https://api.lorem.space/image/movie?w=250&amp;amp;amp;amp;h=330"
        alt="pizza"
      />
    </Container>
  );
};

export default Home;

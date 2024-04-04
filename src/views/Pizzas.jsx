import Form from 'react-bootstrap/Form';


const Pizzas = () => {
  return (
    <>
    <h1 className='text-center mt-5'>Formulario de contacto</h1>
    <Form className='m-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ingresa tu Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Dejatu mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </>
  );
};

export default Pizzas;


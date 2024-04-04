import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <>
    <h1>Formulario de contacto</h1>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ingresar Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Deja tu mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </>
  );
}

export default TextControlsExample;
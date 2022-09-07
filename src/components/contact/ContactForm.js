import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Navn</Form.Label>
        <Form.Control type="name" placeholder="Ditt navn" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <div className='contact-mail-phone'>
        <Form.Group className="mb-3 mail" controlId="formBasicEmail">
            <Form.Label>E-post</Form.Label>
            <Form.Control type="email" placeholder="Din e-post" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 phone" controlId="formBasicPhone">
            <Form.Label>Telefonnummer</Form.Label>
            <Form.Control type="phoneNumber" placeholder="Ditt telefonnummer" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
      </div>

      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Emne</Form.Label>
        <Form.Control type="subject" placeholder="Hva gjelder henvendelsen?" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Melding</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Hva kan vi gjelpe deg med?" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
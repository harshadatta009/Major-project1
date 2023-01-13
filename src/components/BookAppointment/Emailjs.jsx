import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap'
function Emailjs () {
  const [state, handleSubmit] = useForm('myyvronz')
  if (state.succeeded) {
    
  }
  return (
    <Container className='mt-3 '>
      <Row>
        <Col xs md={{ span: 6, offset: 3 }}>
          <Card className='shadow-lg'>
            <Card.Header className='p-3' style={{ backgroundColor: '#212529' }}>
              {' '}<h4 className='text-center text-light'>Book Appointment</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    name='Name'
                    type='text'
                    placeholder='Name'
                    className='mb-2'
                  />
                  <Form.Control
                    name='email'
                    type='email'
                    placeholder='Enter email'
                    className='mb-2'
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                  <Form.Control
                    name='phone'
                    type='text'
                    placeholder='Phone number'
                    className='mb-2'
                  />
                  <Form.Control
                    name='day'
                    type='datetime-local'
                    placeholder='enter day'
                    className='mb-2'
                  />
                  <Form.Control
                    name='message'
                    as='textarea'
                    placeholder='Message'
                    className='mb-2'
                  />{' '}
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                  <Form.Select >
                    <option>Family Case</option>
                    <option>Crimial case</option>
                    <option>Land case</option>
                    <option>Land case</option>
                    <option>Land case</option>
                  </Form.Select>
                  <div className='text-right'>
                    <Button
                      type='submit'
                      className='w-100 mt-3'
                      disabled={state.submitting}
                    >
                      submit
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default Emailjs

import React, { useState } from 'react'
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap'
import './Auth.css'
const Login = () => {
  let [state, setState] = useState({
    user: {
      username: '',
      email: '',
      password: ''
    }
  })
  let updateInput = e => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value
      }
    })
  }
  let register = e => {
    e.preventDefault()
    console.log(state.user)
  }
  return (
    <>

      <div className="login"></div>
      <Container className='mt-5 '>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card className='shadow-lg'>
              <Card.Header className='p-3 bg-black text-light'>
                {' '}<h4 className='text-center'>Login</h4>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Control
                      name='username'
                      onChange={updateInput}
                      type='text'
                      placeholder='Enter username'
                      className='mb-2'
                    />
                    <Form.Control
                      name='email'
                      onChange={updateInput}
                      type='email'
                      placeholder='Enter email'
                      className='mb-2'
                    />
                    <Form.Control
                      name='password'
                      onChange={updateInput}
                      type='password'
                      placeholder='Enter password'
                      className='mb-2'
                    />
                    <div className='text-right'>
                      <Button
                        onClick={register}
                        type='submit'
                        className='w-100'
                      >
                        login
                      </Button>
                    </div>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
    </>
  )
}

export default Login

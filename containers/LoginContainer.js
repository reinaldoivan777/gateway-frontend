import React, { Component } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';
import { Router } from '../routes';

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const body = {
      username,
      password
    };

    try {
      const response = await this.props.login(body);
      if (response.success) Router.push('/tracking');
    } catch (error) {
      console.error('You have an error in your code or there are Network issues.', error);
      throw new Error(error);
    }
  }

  render() {
    return (
      <div className='container text-center mb-5' style={{ marginTop: '25vh' }}>
        <Row>
          <Col xs={12} md={{ offset: 4, span: 4 }}>
            <Card>
              <Card.Body>
                <h3>Login</h3>
                <Form onSubmit={e => this.handleSubmit(e)}>
                  <Form.Group controlId='formUsername'>
                    <Form.Control placeholder='Username' onChange={e => this.setState({ username: e.target.value })} />
                  </Form.Group>
                  <Form.Group controlId='formPassword'>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      onChange={e => this.setState({ password: e.target.value })}
                    />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null, { login })(LoginContainer);

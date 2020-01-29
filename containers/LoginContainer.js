import React, { Component } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';
import { Router } from '../routes';
import Loading from '../components/common/Loading';

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
      errorMessage: ''
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.setState({ loading: true });
    const body = {
      username,
      password
    };

    try {
      const response = await this.props.login(body);
      if (response.success) Router.push('/tracking');
      else this.setState({ errorMessage: response.error, loading: false });
    } catch (error) {
      console.error('You have an error in your code or there are Network issues.', error);
      throw new Error(error);
    }
  }

  render() {
    const { username, password, loading, errorMessage } = this.state;
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
                  <Button
                    disabled={username === '' || password === ''}
                    variant='primary'
                    type='submit'
                    style={{ width: 100 }}
                  >
                    Login
                  </Button>
                </Form>
              </Card.Body>
              {loading && <Loading size='sm' />}
              {errorMessage && <div className='text-center text-danger mb-3'>{errorMessage}</div>}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null, { login })(LoginContainer);

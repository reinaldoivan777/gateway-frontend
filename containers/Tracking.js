import React, { Component, Fragment } from 'react';
import { tracking } from '../redux/actions/tracking';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import TrackingPage from '../pages/tracking';

export class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mbl: '',
      result: null
    };
  }

  handleClick = async () => {
    const { mbl } = this.state;
    const body = {
      mbl_no: mbl
    };
    const result = await tracking(body);
    this.setState({
      result
    });
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col xs='12' md='6'>
            <h1>Tracking</h1>
          </Col>
        </Row>
        <Row>
          <Col xs='12' md='6'>
            <Form.Group controlId='formMblNumber'>
              <Form.Control placeholder='Enter MBL Number' onChange={e => this.setState({ mbl: e.target.value })} />
            </Form.Group>
            <Button variant='primary' onClick={() => this.handleClick()}>
              Search
            </Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(mapStateToProps)(Tracking);

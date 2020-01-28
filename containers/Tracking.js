import React, { Component, Fragment } from 'react';
import { tracking } from '../redux/actions/tracking';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CardResultImport, CardResultExport } from '../components/CardResult';

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
    const { profile } = this.props;
    const { result } = this.state;
    const tipe = profile.tipe || 'import';
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
        {result && (
          <Row className='my-3'>
            <Col>{tipe === 'import' ? <CardResultImport result={result} /> : <CardResultExport />}</Col>
          </Row>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(mapStateToProps)(Tracking);

import React, { Component, Fragment } from 'react';
import { tracking } from '../redux/actions/tracking';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CardResultImport, CardResultExport } from '../components/CardResult';
import { ContentTitle } from '../components/Content';
import Loading from '../components/common/Loading';

export class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mbl: '',
      result: null,
      loading: false
    };
  }

  handleClick = async () => {
    this.setState({ loading: true });
    const { mbl } = this.state;
    const body = {
      mbl_no: mbl
    };
    const result = await tracking(body);
    this.setState({
      result,
      loading: false
    });
  };

  render() {
    const { profile } = this.props;
    const { result, loading } = this.state;
    const tipe = profile.tipe || 'import';
    return (
      <Fragment>
        <ContentTitle>Track and Trace</ContentTitle>
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
        {loading && <Loading />}
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

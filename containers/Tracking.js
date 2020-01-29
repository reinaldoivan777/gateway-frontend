import React, { Component, Fragment } from 'react';
import { tracking } from '../redux/actions/tracking';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CardResultImport, CardResultExport } from '../components/CardResult';
import { ContentTitle } from '../components/Content';
import Loading from '../components/common/Loading';
import DataNotFound from '../components/common/DataNotFound';

export class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resi: '',
      result: null,
      loading: false,
      notFound: false
    };
  }

  searchResi = async event => {
    event.preventDefault();
    this.setState({ notFound: false, resi: '', loading: true, result: null });
    const { profile } = this.props;
    const tipe = profile.tipe || 'import';
    const { resi } = this.state;
    let body;

    if (tipe === 'import') {
      body = {
        mbl_no: resi
      };
    } else {
      body = {
        hbl_no: resi
      };
    }
    const result = await tracking(body);
    if (result.success) {
      this.setState({
        result,
        loading: false
      });
    } else {
      this.setState({
        notFound: true,
        loading: false
      });
    }
  };

  render() {
    const { profile } = this.props;
    const { result, loading, resi, notFound } = this.state;
    const tipe = profile.tipe || 'import';
    return (
      <Fragment>
        <ContentTitle>Track and Trace</ContentTitle>
        <Row>
          <Col xs='12' md='6'>
            <Form onSubmit={e => this.searchResi(e)}>
              <Form.Group controlId='formResiNumber'>
                <Form.Control
                  placeholder={tipe === 'import' ? 'Enter MBL Number' : 'Enter HBL Number'}
                  onChange={e => this.setState({ resi: e.target.value })}
                  value={resi}
                />
              </Form.Group>
              <Button variant='primary' type='submit' disabled={!resi}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        {loading && <Loading />}
        {result && (
          <Row className='my-3'>
            <Col>{tipe === 'import' ? <CardResultImport result={result} /> : <CardResultExport result={result} />}</Col>
          </Row>
        )}
        {notFound && <DataNotFound />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(mapStateToProps)(Tracking);

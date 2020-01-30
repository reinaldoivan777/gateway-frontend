import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Layout = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  border-radius: 3px;
  border: none;
  position: relative;
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-left: -30px;
  margin-right: -30px;
  margin-top: -10px;
  border-radius: 0;
  border-top: 1px solid #f9f9f9;
  padding-left: 35px;
  padding-right: 35px;
  font-size: 20px;
  font-weight: 600;
`;

export class ContentTitle extends Component {
  render() {
    const { title, miniSidebar } = this.props;
    return (
      <Layout>
        <FontAwesomeIcon
          icon={faBars}
          className='mr-3'
          style={{ cursor: 'pointer' }}
          onClick={() => this.props.minimizeSidebar(!miniSidebar)}
        />
        {title}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  miniSidebar: state.sidebar.miniSidebar
});

const mapDispatchToProps = dispatch => {
  return {
    minimizeSidebar: state => dispatch({ type: 'MINI_SIDEBAR', payload: state })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentTitle);

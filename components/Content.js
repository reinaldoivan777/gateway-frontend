import styled from 'styled-components';
import { connect } from 'react-redux';

const Content = styled.div`
  padding-left: ${props => (!props.miniSidebar ? '280px' : '90px')};
  padding-right: 30px;
  padding-top: 10px;
  width: 100%;
  position: relative;
  overflow: auto;
  transition: padding-left 1s;
`;

const mapStateToProps = state => ({
  miniSidebar: state.sidebar.miniSidebar
});

export default connect(mapStateToProps)(Content);

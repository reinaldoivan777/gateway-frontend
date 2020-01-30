import styled from 'styled-components';

export const Sidebar = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  position: fixed;
  top: 0;
  height: 100%;
  width: ${props => (!props.miniSidebar ? '250px' : '60px')};
  background-color: #fff;
  z-index: 880;
  left: 0;
  color: #868e96;
  overflow: auto;
  transition: width 1s;
`;

export const SidebarHeader = styled.h3`
  display: inline-block;
  width: 100%;
  text-align: center;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  color: black;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 10px 20px;
    cursor: pointer;
    color: #868e96;

    &:hover {
      opacity: 0.8;
    }
  }

  .active {
    border-left: 3px solid #6777ef;
    padding-left: 17px;
  }

  li,
  a {
    color: #868e96;
  }

  .active,
  a {
    color: #6777ef;
  }

  li,
  a:hover {
    color: #868e96;
    text-decoration: none;
  }
`;

export const SidebarLogout = styled.div`
  position: absolute;
  bottom: 16px;
  width: 100%;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

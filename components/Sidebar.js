import styled from 'styled-components';

export const Sidebar = styled.div`
  width: 230px;
  color: #ffffff;
  background-color: #222d32;
  overflow: auto;
  height: 100vh;
  margin-right: 16px;
  padding: 16px 0;
  display: block;
  z-index: 801;
  float: left;
`;

export const SidebarHeader = styled.h3`
  padding: 10px 20px;
  cursor: pointer;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  li active {
    border-left: 3px solid blue;
  }

  li,
  a {
    color: #ffffff;
  }

  li,
  a:hover {
    color: #ffffff;
    text-decoration: none;
  }
`;

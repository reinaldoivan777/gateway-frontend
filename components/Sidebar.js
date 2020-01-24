import styled from 'styled-components';

export const Sidebar = styled.div`
  width: 230px;
  color: #ffffff;
  background-color: #222d32;
  height: 100vh;
  margin-right: 16px;
  padding-bottom: 16px;
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
`;

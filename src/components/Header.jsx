import React from "react";
import styled from "styled-components";

const Cabecalho = styled.header`
  background-color: #1c1c1c;
  height: 80px;
  width: 100%;
`;

const Nome = styled.div`
  color: #00ff00;
  font-size: 30px;
  padding: 14px 0px 14px 15%;
  width: 50%;
  display: inline-block;
  font-family: Segoe UI;
`;

const Menu = styled.a`
  color: white;
  font-size: 20px;
  padding: 14px 0px 14px 0px;
  margin-right: 2%;
  font-weight: bold;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Cabecalho>
      <a href="/#"><Nome>Victor Coutinho</Nome></a>
      <Menu href="#">cursos</Menu>
      <Menu href="#">blog</Menu>
      <Menu href="#">portfolio</Menu>
      <Menu href="#">contato</Menu>
    </Cabecalho>
  );
};

export default Header;

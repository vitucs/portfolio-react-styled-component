import React from "react";
import styled from "styled-components";

const Inferior = styled.footer`
  background-color: #1c1c1c;
  height: 60px;
  text-align: center;
  position: fixed;
  bottom:0;
  width: 100%;
`;

const Direitos = styled.div`
  color: #00ff00;
  font-size: 16px;
  padding: 20px 0;
  font-family: Segoe UI;
`;


const Rodape = () => {
  return (
    <Inferior>
      <Direitos>All rights reserved.</Direitos>
    </Inferior>
  );
};

export default Rodape;

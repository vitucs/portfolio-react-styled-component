import React from "react";
import styled from "styled-components";
import fotoperfil from "./img/eu.jpg";
import youtube from "./img/youtube.png";
import instagram from "./img/instagram.png";
import linkedin from "./img/linkedin.png";

const Conteudo = styled.div`
  width: 60%;
  heigth: 100%;
  padding: 15% 20%;
  display: flex;
  flex-direction: row;
`;

const FotoPerfil = styled.img`
  heigth: 100%;
  width: 100%;
  border-radius: 50%;
`;

const Icon = styled.img`
  heigth: 30px;
  width: 30px;
  margin-right: 5px;
`;

const Apresentacao = styled.div`
  display: flex;
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0px 0px 0px 5%;
`;

const Profissao = styled.a`
  background-color: #00ff00;
  border-radius: 5px;
  padding: 0px 4px 0px 4px;
  color: #1c1c1c;
  font-weight: bold;
  font-family: Segoe UI;
  display: inline-block;
  width: max-content;
  height: 25px;
`;
const Trabalho = styled.a`
  font-size: 24px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI;
  width: 85%;
  height: 50px;
`;
const Experiencia = styled.a`
  font-size: 18px;
  color: #00ff00;
  font-weight: bold;
  font-family: Segoe UI;
  width: 85%;
  height: 50px;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  heigth: 15%;
  width: 15%;
  padding: 0px 0px 0px 10%;
`;
const Itens = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const Content = () => {
  return (
    <Conteudo>
      <Social>
        <FotoPerfil src={fotoperfil} />
        <Itens>
          <a href="/#">
            <Icon src={youtube} />
          </a>
          <a href="/#">
            <Icon src={instagram} />
          </a>
          <a href="/#">
            <Icon src={linkedin} />
          </a>
        </Itens>
      </Social>
      <Apresentacao>
        <Profissao>JR Fullstack Developer</Profissao>
        <Trabalho>
          Trabalho no desenvolvimento de aplicações web performáticas
        </Trabalho>
        <Experiencia>
          Tecnologias que já utilizei: PHP, CSS, JS, React, C++ e Python
        </Experiencia>
      </Apresentacao>
    </Conteudo>
  );
};

export default Content;

import { Container, TextAboutMe } from "./styles";
import Title from "../Title";

import perfil from "../../assets/perfil.png";

const About = () => {
  return (
    <>
      <Container>
        <span id="sobre"></span>
        <Title>Sobre</Title>
        <div>
          <TextAboutMe>
            Olá! Tudo bem? Me chamo André Luiz, tenho 18 anos e sou
            desenvolvedor Full-stack e apaixonado pela tecnologia e todas as
            coisas incríveis que ela nos proporciona! Amo o que faço e tenho
            foco para me tornar um ótimo desenvolvedor. Meu maior sonho é poder
            ajudar pessoas com o auxílio da tecnologia.
          </TextAboutMe>
          <img src={perfil} />
        </div>
      </Container>
    </>
  );
};

export default About;

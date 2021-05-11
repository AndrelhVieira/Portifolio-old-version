import { Container, IconsDiv, CurriculumDiv, Email } from "./styles";
import ButtonStyled from "../ButtonStyled";

import { contact } from "../../providers/contact";

const Contact = () => {
  return (
    <>
      <span id="contact" />
      <Container>
        <h1>Contato</h1>
        <h3>
          Vou deixar aqui alguns contatos e Github caso queira dar uma olhada.
        </h3>
        <Email>
          <i class="fas fa-envelope"></i>andreluizhillerv@gmail.com
        </Email>
        <IconsDiv>
          {contact.map((icon, index) => (
            <div>
              <a href={icon.link} key={index} target="_blank">
                {icon.icon}
              </a>
            </div>
          ))}
        </IconsDiv>
        <h1>Meu CV</h1>
        <CurriculumDiv>
          <h3>Se tiver interesse, aqui está o meu Currículo:</h3>
          <ButtonStyled isLight={false}>Acessar Curriculum</ButtonStyled>
        </CurriculumDiv>
      </Container>
    </>
  );
};

export default Contact;

import { Container, IconsDiv } from "./styles";
import Title from "../Title";

import { contact } from "../../providers/contact";

const Contact = () => {
  return (
    <>
      <span id="contact" />
      <Container>
        <h1>Contato</h1>
        <h3>
          Vou deixar aqui os meu contato e Github caso queira dar uma olhada.
        </h3>
        <IconsDiv>
          {contact.map((icon, index) => (
            <a href={icon.link} key={index} target="_blank">
              {icon.icon}
            </a>
          ))}
        </IconsDiv>
      </Container>
    </>
  );
};

export default Contact;

import Header from "../../components/Header";
import Cover from "../../components/Cover";
import About from "../../components/About";
import Technologies from "../../components/Technologies";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import { Container } from "./styles";

import { useEffect } from "react";

const Homepage = () => {
  const scroll = document.body.scrollTop;

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);

  return (
    <Container>
      <Header />
      <Cover />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Homepage;

import Header from "../../components/Header";
import Cover from "../../components/Cover";
import About from "../../components/About";
import Technologies from "../../components/Technologies";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import { Container } from "./styles";

const Homepage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div class="loader">
          <BeatLoader loading={loading} size={15} color="#d4d4d4" />
        </div>
      ) : (
        <Container>
          <Header />
          <Cover />
          <About />
          <Technologies />
          <Portfolio />
          <Contact />
          <Footer />
        </Container>
      )}
    </>
  );
};

export default Homepage;

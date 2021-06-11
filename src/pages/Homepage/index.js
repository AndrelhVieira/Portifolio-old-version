import Header from "../../components/Header";
import Cover from "../../components/Cover";
import About from "../../components/About";
import Technologies from "../../components/Technologies";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { motion } from "framer-motion";

import { Container, Loader } from "./styles";
import Logo from "../../assets/alv-logo.png";

const Homepage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section class="cover">
      {loading ? (
        <Loader>
          <img src={Logo} alt="Logo ALV" />
          <HashLoader
            speedMultiplier={3}
            loading={loading}
            size={60}
            color="#d4d4d4"
          />
        </Loader>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Container>
            <Header />
            <Cover />
            <About />
            <Technologies />
            <Portfolio />
            <Contact />
            <Footer />
          </Container>
        </motion.div>
      )}
    </section>
  );
};

export default Homepage;

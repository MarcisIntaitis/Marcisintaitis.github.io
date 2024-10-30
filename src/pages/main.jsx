import { motion } from "framer-motion";
import "../styles/main.css";

export const Main = () => {
  return (
    <section className="container" id="main">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
          }}
          className="greeting"
        >
          HEY I'M MĀRCIS
        </h1>
      </motion.div>
      <motion.div
        style={{ display: "flex", justifyContent: "center" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p className="hero-description">Web developer based in Riga, Latvia</p>
      </motion.div>
    </section>
  );
};

import { motion } from "framer-motion";
import "../styles/hero.css";

export const Hero = () => {
  return (
    <section className="container" id="hero">
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
        >
          HEY I'M MĀRCIS
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p className="hero-description">
          A web developer mostly working with <em>React</em> trying to make{" "}
          <em>responsive</em> and <em>visually interesting</em> sites
        </p>
      </motion.div>
    </section>
  );
};

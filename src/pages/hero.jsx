import { motion } from "framer-motion";

// quite useless to have this but i want scroll animations

export const Hero = () => {
  return (
    <section className="container" id="contacts">
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
          HEY
        </h1>
      </motion.div>
    </section>
  );
};

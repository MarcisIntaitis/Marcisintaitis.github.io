import "./App.css";
import { Contacts } from "./pages/contacts";
import { Main } from "./pages/main";
import { Projects } from "./pages/projects";
import { motion, useScroll, useSpring } from "framer-motion";
import CustomCursor from "./components/customCursor"; // Import the custom cursor

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="app-container">
      <CustomCursor /> {/* Add the custom cursor */}
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Main />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;

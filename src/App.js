import './App.css';
import { Contacts } from './pages/contacts';
import { Hero } from './pages/hero';
import { Main } from './pages/main';
import { Projects } from './pages/projects';
import { motion, useScroll, useSpring } from "framer-motion";
// import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
// import { throttle } from 'lodash';
// import { Navbar } from './components/navbar';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className='app-container'>
      <motion.div className="progress-bar" style={{ scaleX }} />
      
      {/* <Navbar /> */}
      {/* <ScrollMenu 
      > */}
        <Hero />
        <Main />
        <Projects />
        <Contacts />
      {/* </ScrollMenu> */}
    </div>
  );
}

//horizontal scrolling settings, for now disabled, not sure if i want to use it

// Throttle the scroll function to fire at intervals of 500ms otherwise it causes a weird jitter and just looks bad
// const throttledOnWheel = throttle((apiObj, ev) => {
//   if (ev.deltaY !== 0) {
//     if (ev.deltaY < 0) {
//       apiObj.scrollPrev();
//     } else if (ev.deltaY > 0) {
//       apiObj.scrollNext();
//     }
//   }
// }, 500);

export default App;

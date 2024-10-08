import './App.css';
import { Contacts } from './pages/contacts';
import { Main } from './pages/main';
import { Projects } from './pages/projects';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { throttle } from 'lodash';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <ScrollMenu 
        onWheel={throttledOnWheel}
      >
        <Main />
        <Projects />
        <Contacts />
      </ScrollMenu>
    </div>
  );
}

// Throttle the scroll function to fire at intervals of 500ms otherwise it causes a weird jitter and just looks bad
const throttledOnWheel = throttle((apiObj, ev) => {
  if (ev.deltaY !== 0) {
    if (ev.deltaY < 0) {
      apiObj.scrollPrev();
    } else if (ev.deltaY > 0) {
      apiObj.scrollNext();
    }
  }
}, 500);

export default App;

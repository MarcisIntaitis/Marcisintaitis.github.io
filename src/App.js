import "./App.css";
import { Contacts } from "./pages/contacts";
import { Main } from "./pages/main";
import { Projects } from "./pages/projects";
import CustomCursor from "./components/customCursor"; // Import the custom cursor
import { Skills } from "./pages/skills";

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <div className="top-row">
        <Main />
        <Skills />
      </div>
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;

import {SideNav} from "./SideNav";
import {Main} from "./Main";
import {ParticleBackground} from "./ParticleBackground";
import {Skills} from "./Skills";
import {Projects} from "./Projects";



function App() {

  return (
      <div>
          <ParticleBackground/>
          <SideNav/>
          <Main />
          <Skills/>
          <Projects/>
      </div>

  );
}

export default App;

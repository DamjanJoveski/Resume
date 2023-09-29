import {SideNav} from "./SideNav";
import {Main} from "./Main";
import {ParticleBackground} from "./ParticleBackground";
import {Skills} from "./Skills";
import {Projects} from "./Projects";
import {Education} from "./Education";



function App() {

  return (
      <div>
          <ParticleBackground/>
          <SideNav/>
          <Main />
          <Skills/>
          <Projects/>
          <Education/>
      </div>

  );
}

export default App;

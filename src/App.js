import {SideNav} from "./SideNav";
import {Main} from "./Main";
import {ParticleBackground} from "./ParticleBackground";
import {Skills} from "./Skills";
import {Projects} from "./Projects";
import {Education} from "./Education";
import {Contact} from "./Contact";
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
      <div>
          <ParticleBackground/>
          <SideNav/>
          <Main />
          <Skills/>
          <Projects/>
          <Education/>
          <Contact/>
          <Analytics/>
      </div>

  );
}

export default App;

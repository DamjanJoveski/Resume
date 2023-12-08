import {SideNav} from "./SideNav";
import {Main} from "./Main";
import {ParticleBackground} from "./ParticleBackground";
import {Skills} from "./Skills";
import {Projects} from "./Projects";
import {Education} from "./Education";
import {Contact} from "./Contact";
import { SpeedInsights } from '@vercel/speed-insights/react';




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
          <SpeedInsights />
      </div>

  );
}

export default App;

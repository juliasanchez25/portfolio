import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Outlet } from "react-router-dom";
import Navbar from './routes/Navbar';
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Parallax pages={8} style={{ top: '0', left: '0' }} className="animation">

        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation-layer parallax" id="p-first-layer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation-layer parallax" id="p-second-layer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation-layer parallax" id="p-third-layer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation-layer parallax" id="p-fourth-layer"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div className="main-title-area">
            <h1>titulooo</h1>
            <p>adwdwdwdwd</p>
            <a href=""><button className="btn-get-started">Get started</button></a>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25}>
          <Home />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

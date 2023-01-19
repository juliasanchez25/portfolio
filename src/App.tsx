import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation-layer parallax" id="p-artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation-layer parallax" id="p-first-layer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation-layer parallax" id="p-second-layer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation-layer parallax" id="p-third-layer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation-layer parallax" id="p-fourth-layer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <Outlet />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

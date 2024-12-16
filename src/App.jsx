import HeroSection from "./hero-section";
import NavBar from "./nav-bar";

function App() {
  return (
    <div className="flex w-screen h-screen flex-col bg-orange-300">
      <NavBar />
      <HeroSection />
      <div className="flex flex-1 bg-orange-300 w-[1000px] mx-auto relative">
        <div className="flex flex-col flex-1">
          <img
            src="https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-starbucks-caramel-frappuccino-color-image-liquid-png-image_10465024.png"
            alt="logo"
            className="w-[100px] mx-auto"
          />
          <h2 className="mx-auto">Caramel Ribbon</h2>
          <button>Add to order +</button>
        </div>
        <div className="flex flex-col flex-1">
          <img
            src="https://attic.sh/e79r9p3iybg51kczzp7t25s8f1bo"
            alt="logo"
            className="w-[140px] mx-auto"
          />
          <h2 className="mx-auto">Caramel Ribbon</h2>
          <button>Add to order +</button>
        </div>
        <div className="flex flex-col flex-1">
          <img
            src="https://s2.r29static.com/bin/entry/509/720x940,85/1806305/image.webp"
            alt="logo"
            className="w-[120px] mx-auto"
          />
          <h2 className="mx-auto">Caramel Ribbon</h2>
          <button>Add to order +</button>
        </div>
      </div>
    </div>
  );
}

export default App;

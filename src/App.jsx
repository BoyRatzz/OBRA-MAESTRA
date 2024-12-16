import HeroSection from "./hero-section";
import NavBar from "./nav-bar";

function App() {
  return (
    <div className="flex flex-col bg-orange-300 h-screen w-screen items-center">
      <div className="w-full max-w-[1280px] flex-col flex">
        <NavBar />
        <HeroSection />
        <div className="flex flex-1 mx-auto">
          <div className="bg-blue-950 flex gap-[100px] border-transparent rounded-t-2xl h-[200px] mt-28">
            <div className="flex flex-col flex-1 -translate-y-20 px-10">
              <div className="flex bg-amber-500 rounded-full aspect-square relative">
                <img
                  src="https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-starbucks-caramel-frappuccino-color-image-liquid-png-image_10465024.png"
                  alt="logo"
                  className="w-[100px] mx-auto absolute left-3 -top-5 drop-shadow-2xl"
                />
              </div>
              <h2 className="mx-auto text-white text-nowrap pt-4">Caramel Ribbon</h2>
              <button className="text-white text-nowrap">Add to order +</button>
            </div>
            <div className="flex flex-col flex-1 px-10 -translate-y-20">
              <div className="flex bg-yellow-700 rounded-full aspect-square">
                <img
                  src="https://attic.sh/e79r9p3iybg51kczzp7t25s8f1bo"
                  alt="logo"
                  className="w-[140px] mx-auto drop-shadow-2xl"
                />
              </div>
              <h2 className="mx-auto text-white text-nowrap pt-4">Almond Fudge</h2>
              <button className="text-white text-nowrap">Add to order +</button>
            </div>
            <div className="flex flex-col flex-1 px-10 -translate-y-20">
              <div className="flex bg-red-500 rounded-full aspect-square relative">
                <img
                  src="https://s2.r29static.com/bin/entry/509/720x940,85/1806305/image.webp"
                  alt="logo"
                  className="w-[120px] mx-auto drop-shadow-2xl absolute -top-7"
                />
              </div>
              <h2 className="mx-auto text-white text-nowrap w-[120px] pt-4">Strawberry Funnel</h2>
              <button className="text-white text-nowrap">Add to order +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

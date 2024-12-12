import HeroSection from "./hero-section";
import NavBar from "./nav-bar";

function App() {
  return (
    <div className="flex w-screen h-screen flex-col">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;

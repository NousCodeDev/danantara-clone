// import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Journey } from "./components/Journey";
import { VisiMission } from "./components/VisiMission";
import { Speech } from "./components/Speech";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-plus-jakarta min-h-screen scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Journey />
        <Speech />
        <VisiMission />
        <Contact />
        <Footer />
        <ScrollToTop />
        {/* <LoadingScreen /> */}
      </div>
    </>
  );
}

export default App;

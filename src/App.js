import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import "./App.scss";
import Supporters from "./components/Supporters/Supporters";
import Steps from "./components/Steps/Steps";
import Asset from "./components/Asset/Asset";
import Save from "./components/Save/Save";
import Regulate from "./components/Regulate/Regulate";
import Testimonial from "./components/Testimonial/Testimonial";
import Community from "./components/Comunnity/Community";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main">
        <Hero />
        <Supporters />
        <Steps />
        <Asset />
        <Save />
        <Regulate />
        <Testimonial />
        <Community />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

export default App;

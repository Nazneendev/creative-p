import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

import Header from "./Components/Layout/Header";
import Portfolio from "./Components/Layout/Portfolio";
import News from "./Components/News";
import Service from "./Components/Service";
import TeamMember from "./Components/TeamMember";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Service />
      <Portfolio/>
      <TeamMember/>
      <Testimonial/>
      <News/>
      <Footer/>
    </>
  );
}

export default App;

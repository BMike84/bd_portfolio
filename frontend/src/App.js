import React from "react";
import {
  Services,
  Footer,
  Header,
  Skills,
  // Testimonials,
  Work,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Services />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;

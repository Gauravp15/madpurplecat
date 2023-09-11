import React from "react";
import { Header } from "./components/Header";
import { Masthead } from "./components/Masthead";
import {SelectedWork} from "./components/SelectedWork"
import {JourneyCuriosity} from "./components/JourneyCuriosity"
import {WhatHoomansSay} from "./components/WhatHoomansSay"
import {Footer} from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Masthead />
      <SelectedWork />
      <JourneyCuriosity />
      <WhatHoomansSay />
      <Footer />
    </div>
  );
}

export default App;
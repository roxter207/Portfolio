import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import OurMotive from "./Components/OurMotive";
import Ourservice from "./Components/Ourservice";
import Toggle from "./Components/Toggle";


const darkTheme = {
  color :'#131424',
  fadecolor: "#343b7c",
  icon:"white"
}

const lightTheme = {
  color: "#131424",
  fadecolor:"#A12EC9",
  icon:"black"
}


function App() {

  const [theme,setTheme] = useState("darkTheme");
  const isLightTheme = theme === "lightTheme";

  const toggleTheme = () => {
    setTheme(isLightTheme ? 'darkTheme':'lightTheme')
  }

  return (
    <div>
      <BrowserRouter>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme} >
        <Toggle toggleTheme={toggleTheme}/>
        <Home/>
        <Ourservice />
        <OurMotive />
        <Footer />
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

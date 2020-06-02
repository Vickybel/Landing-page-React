import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Nav from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

function App() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <Card />
      <Footer />
    </>
  );
}

export default App;
import React from "react";
import Navbar from "../components/Navbar";

const Main = ({ children }) => {
  return (
    <div className="App w-full h-screen max-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Main;

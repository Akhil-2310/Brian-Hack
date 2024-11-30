// src/pages/ChatPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Base from "../components/Base";


function BasePage() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Base/>
      </div>
    </>
  );
}

export default BasePage;

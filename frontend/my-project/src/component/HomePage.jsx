import React from "react";
import MainHeader from "./MainHeader";
function HomePage() {
  return (
    <div className="bg-sl">
      <MainHeader
        title="Animation"
        nav="Animation"
        details="In this module the user can input values, to create an shape-object
          and control the color, scaling and transformation of said object."
      />
      <MainHeader
        title="Login"
        nav="Login"
        details="In this module the user can create account and login this module includes validation and verification and responsive design"
      />
      <MainHeader
        title="New Component"
        nav=""
        details="In this module the user can create account and login this module includes validation and verification and responsive design"
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default HomePage;

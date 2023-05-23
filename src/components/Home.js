import React from "react";
import * as variables from "../data/user"

function Home() {
  return (
    <div id="home">
      <h1>
        {variables.username} is a Web Developer from {variables.city}
      </h1>
    </div>
  );
}

export default Home

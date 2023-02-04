import React, { useState } from "react";

function Toggle() {
    const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle);
  }


  return <button onClick={handleClick}>{toggle ? "On" : "Off"}</button>;
}

export default Toggle;

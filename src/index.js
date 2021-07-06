import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>hi</p>;
}

render(<Hi />, document.getElementById("app"));

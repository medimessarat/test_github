import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Spinner"
        style={{ display: "block", width: "200px", margin: "auto" }}
      />
    </div>
  );
}

import { useEffect } from "react";

function BasicSyntax() {
  useEffect(() => {
    console.log("component rendered!");
  });
  return <h1>A basic example of useEffect Hook</h1>;
}

export default BasicSyntax;

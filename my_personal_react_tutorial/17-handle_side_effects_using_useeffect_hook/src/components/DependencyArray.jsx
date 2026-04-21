import { useEffect } from "react";

function DependencyArray() {
  useEffect(() => {
    console.log("this effect runs only once!");
  }, []); // the effect will run only once

  return (
    <h1>
      Use of Dependency Array to control how many times an effect will run
    </h1>
  );
}

export default DependencyArray;

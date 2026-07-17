import { useMemo } from "react";

function sum() {
  let total = 0;
  for (let i = 1; i <= 1000000000; i++) {
    total += i;
  }
  return total;
}

function UseMemo() {
  const summation = useMemo(() => {
    return sum();
  }, []);

  return (
    <div className="">
      {/* <h2 className="">SUM : {sum()}</h2> */}
      <h2 className="">SUM : {summation}</h2>
    </div>
  );
}

export default UseMemo;

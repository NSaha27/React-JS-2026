import { useState } from "react";
import "./App.css";
import Calculations from "./components/Calculations";
import Results from "./components/Results";

function App() {
  const [tp, setTp] = useState(0);
  const [tpp, setTPP] = useState(0);
  const [tba, setTBA] = useState(0);
  const [tbapp, setTBAPP] = useState(0);
  const handleCalcDetails = ({
    tip,
    tipPerPerson,
    totalBillAmount,
    totalBillAmountPerPerson,
  }) => {
    setTp(tip);
    setTPP(tipPerPerson);
    setTBA(totalBillAmount);
    setTBAPP(totalBillAmountPerPerson);
  };

  return (
    <>
      <div className="w-lg mx-auto my-8 shadow-xl shadow-emerald-300">
        <Results
          tip={tp}
          tipPerPerson={tpp}
          totalBillAmount={tba}
          totalBillAmountPerPerson={tbapp}
        />
        <Calculations onCalcDetails={handleCalcDetails} />
      </div>
    </>
  );
}

export default App;

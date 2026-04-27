import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoPricetag } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

function Calculations({ onCalcDetails }) {
  const [billAmount, setBillAmount] = useState("");
  const [customTipInputToggle, setCustomTipInputToggle] = useState(false);
  const [tipPercentage, setTipPercentage] = useState("10");
  const [customTipPercentage, setCustomTipPercentage] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");

  const handleBillAmount = (ev) => {
    const bill = Number(ev.target.value);
    if (!isNaN(bill) && bill > 0) {
      setBillAmount(bill);
    }
  };
  const handleTipPercentage = (percent) => {
    setTipPercentage(percent);
  };
  const handleCustomTipPercentage = (ev) => {
    const tip = Number(ev.target.value);
    if (!isNaN(tip) && tip > 0) {
      setCustomTipPercentage(tip);
    }
  };
  const handleNumOfPeople = (ev) => {
    const people = Number(ev.target.value);
    if (!isNaN(people) && people > 0) {
      setNumOfPeople(people);
    }
  };
  const handleCalculateTip = () => {
    const tip = (billAmount * tipPercentage) / 100;
    const tipPerPerson = tip / numOfPeople;
    const totalBillAmount = billAmount + tip;
    const totalBillAmountPerPerson = totalBillAmount / numOfPeople;
    onCalcDetails({
      tip,
      tipPerPerson,
      totalBillAmount,
      totalBillAmountPerPerson,
    });
  };
  const handleReset = () => {
    setBillAmount("");
    setCustomTipInputToggle(false);
    setTipPercentage("10");
    setCustomTipPercentage("");
    setNumOfPeople("");
    onCalcDetails({
      tip: 0,
      tipPerPerson: 0,
      totalBillAmount: 0,
      totalBillAmountPerPerson: 0,
    });
    // fix the problem of repainting here...
  };

  return (
    <div className="py-12 px-20 grid grid-cols-3 gap-6 items-center">
      <div className="flex gap-2 items-center text-lg font-semibold">
        <IoPricetag /> Bill
      </div>
      <div className="col-span-2">
        <input
          type="text"
          name="bill"
          id=""
          className="w-full border-3 border-emerald-600 py-2 px-3 text-lg"
          placeholder="0"
          value={billAmount}
          onChange={handleBillAmount}
        />
      </div>
      <div className="flex gap-2 items-center text-lg font-semibold">
        <RiPencilFill /> Tip
      </div>
      <div className="col-span-2 flex gap-2">
        <button
          className={`p-2 border-3 border-emerald-600 font-semibold cursor-pointer ${!customTipInputToggle && tipPercentage == 5 ? "transition bg-linear-to-t from-green-300 to-emerald-500 text-gray-950" : ""}`}
          onClick={() => handleTipPercentage(5)}
        >
          5%
        </button>
        <button
          className={`p-2 border-3 border-emerald-600 font-semibold cursor-pointer ${!customTipInputToggle && tipPercentage == 10 ? "transition bg-linear-to-t from-green-300 to-emerald-500 text-gray-950" : ""}`}
          onClick={() => handleTipPercentage(10)}
        >
          10%
        </button>
        <button
          className={`p-2 border-3 border-emerald-600 font-semibold cursor-pointer ${!customTipInputToggle && tipPercentage == 20 ? "transition bg-linear-to-t from-green-300 to-emerald-500 text-gray-950" : ""}`}
          onClick={() => handleTipPercentage(20)}
        >
          20%
        </button>
        <button
          className={`p-2 border-3 border-emerald-600 font-semibold cursor-pointer ${customTipInputToggle ? "transition bg-linear-to-t from-green-300 to-emerald-500 text-gray-950" : ""}`}
          onClick={() => setCustomTipInputToggle(!customTipInputToggle)}
        >
          Custom
        </button>
      </div>
      {customTipInputToggle && (
        <>
          <div className="flex gap-2 items-center text-lg font-semibold"></div>
          <div className="col-span-2 flex gap-3 items-center">
            <input
              type="text"
              step={0.2}
              name="customTip"
              id=""
              className="w-full border-3 border-emerald-600 py-2 px-3 text-lg"
              placeholder="0%"
              value={customTipPercentage}
              onChange={handleCustomTipPercentage}
            />
            <button
              className={`p-2 border-3 border-emerald-600 text-lg font-semibold text-gray-800 cursor-pointer transition bg-linear-to-t from-green-300 to-emerald-500 hover:from-green-400 hover:to-emerald-600 hover:text-gray-950 hover:shadow-2xl`}
              onClick={() => handleTipPercentage(customTipPercentage)}
            >
              Apply
            </button>
          </div>
        </>
      )}
      <div className="flex gap-2 items-center text-lg font-semibold">
        <IoMdPerson /> Split?
      </div>
      <div className="col-span-2">
        <input
          type="text"
          accept="integer"
          name="numOfPeople"
          id=""
          className="w-full border-3 border-emerald-600 py-2 px-3 text-lg"
          placeholder="0 people"
          value={numOfPeople}
          onChange={handleNumOfPeople}
        />
      </div>
      <div className="flex gap-2 items-center text-lg font-semibold"></div>
      <div className="col-span-3 flex flex-col gap-4">
        <button
          className="w-full py-2 text-lg font-semibold text-gray-800 cursor-pointer transition bg-linear-to-t from-green-300 to-emerald-500 hover:from-green-400 hover:to-emerald-600 hover:text-gray-950 hover:shadow-2xl"
          onClick={handleCalculateTip}
        >
          Calculate Tip
        </button>
        <button
          className="w-full py-2 text-lg font-semibold text-gray-200 cursor-pointer transition bg-linear-to-t from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 hover:text-white hover:shadow-2xl"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Calculations;

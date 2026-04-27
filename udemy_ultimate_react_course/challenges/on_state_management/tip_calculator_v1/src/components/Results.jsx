import { FaIndianRupeeSign } from "react-icons/fa6";

function Results({
  tip,
  tipPerPerson,
  totalBillAmount,
  totalBillAmountPerPerson,
}) {
  return (
    <div className="p-6 grid grid-cols-2 bg-linear-to-t from-green-300 to-emerald-700">
      <div className="p-4 flex flex-col items-center gap-3">
        <h3 className="text-2xl font-semibold text-gray-100">Total Tip</h3>
        <h2 className="flex items-center text-3xl font-extrabold text-gray-100">
          <FaIndianRupeeSign />
          {Math.round(tip)}
        </h2>
      </div>
      <div className="p-4 flex flex-col items-center gap-3">
        <h3 className="text-2xl font-semibold text-gray-100">Split Tip</h3>
        <h2 className="flex items-center text-3xl font-extrabold text-gray-100">
          <FaIndianRupeeSign />
          {Math.round(tipPerPerson)}
        </h2>
      </div>
      <div className="p-4 flex flex-col items-center gap-3">
        <h3 className="text-2xl font-semibold text-gray-900">Total Bill</h3>
        <h2 className="flex items-center text-3xl font-extrabold text-gray-900">
          <FaIndianRupeeSign />
          {Math.round(totalBillAmount)}
        </h2>
      </div>
      <div className="p-4 flex flex-col items-center gap-3">
        <h3 className="text-2xl font-semibold text-gray-900">Split Total</h3>
        <h2 className="flex items-center text-3xl font-extrabold text-gray-900">
          <FaIndianRupeeSign />
          {Math.round(totalBillAmountPerPerson)}
        </h2>
      </div>
    </div>
  );
}

export default Results;

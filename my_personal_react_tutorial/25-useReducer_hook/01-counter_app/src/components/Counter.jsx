import { useReducer } from "react";

export default function Counter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        state += 1;
        return state;
      case "DECREMENT":
        if (state > 0) {
          state -= 1;
        }
        return state;
      case "RESET":
        state = 0;
        return state;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  const handleDecrement = () => {
    return dispatch({ type: "DECREMENT" });
  };
  const handleIncrement = () => {
    return dispatch({ type: "INCREMENT" });
  };
  const handleReset = () => {
    return dispatch({ type: "RESET" });
  };

  return (
    <div className="">
      <div className="">
        <h1 className="">Counter App</h1>
        <div className="">
          <button className="" onClick={handleDecrement}>
            -
          </button>
          <input
            type="text"
            name=""
            id=""
            className=""
            value={count}
            readOnly={true}
          />
          <button className="" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="">
          <button className="" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

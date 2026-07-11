import { useReducer } from "react";

const initialState = {
  count: 0,
};

export default function Counter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state["count"] + 1 };
      case "DECREMENT":
        return { ...state, count: state["count"] > 0 ? state["count"] - 1 : 0 };
      case "RESET":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

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
            value={state["count"]}
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

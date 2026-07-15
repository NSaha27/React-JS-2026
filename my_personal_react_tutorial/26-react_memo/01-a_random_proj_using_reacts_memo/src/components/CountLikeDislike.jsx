import { useReducer } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

import LikeDislikeMessage from "./LikeDislikeMessage";

const initialState = {
  likes: 0,
  dislikes: 0,
};

const reducer = (curState, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...curState,
        likes: curState.likes + 1,
      };
    case "DISLIKE":
      return {
        ...curState,
        dislikes: curState.dislikes + 1,
      };
    default:
      return curState;
  }
};

export default function CountLikeDislike() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="">
      <div className="">
        <div className="">
          <span className="">{state.likes} likes</span>
          <button className="" onClick={() => dispatch({ type: "LIKE" })}>
            <AiOutlineLike />
          </button>
        </div>
        <div className="">
          <span className="">{state.dislikes} dislikes</span>
          <button className="" onClick={() => dispatch({ type: "DISLIKE" })}>
            <AiOutlineDislike />
          </button>
        </div>
      </div>
      <div className="">
        <LikeDislikeMessage />
      </div>
    </div>
  );
}

import { memo, useEffect, useRef, useState } from "react";

function LikeDislikeMessage() {
  const ref = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    ref.current += 1;
    setRenderCount(ref.current);
    console.log(ref.current);
  }, []);

  return (
    <h4 className="">
      This message has no need to display : this parent component rendered{" "}
      {renderCount} times
    </h4>
  );
}

export default memo(LikeDislikeMessage);

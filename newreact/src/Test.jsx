import React, { useEffect, useReducer, useRef } from "react";

function reducer(state, payload) {
  switch (payload.type) {
    case "count": {
      return { ...state, count: state.count + 1 };
    }
    default: {
      return { ...state };
    }
  }
}
export default function Test() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const stuff = useRef();
  useEffect(() => {
    console.log(stuff, "From the effect");
  });
  return (
    <div className="container">
      <h1>{state.count}</h1>
      <div ref={stuff}>
        <button onClick={() => dispatch({ type: "count" })}>Click Me!</button>
      </div>
    </div>
  );
}

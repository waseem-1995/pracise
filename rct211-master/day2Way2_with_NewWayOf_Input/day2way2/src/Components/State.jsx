import React, { useEffect } from "react";

export default function State({ direction }) {
  const [state, setState] = React.useState(0);

  useEffect(() => {
    if (direction !== "Forward") {
      setState(60);
    }else{setState(0)}
  },[direction]);
  console.log("Amit", direction);
  //why it is not re-rendring
  return (
    <div>
      <h1>Counter: {state}</h1>
      <button onClick={() => setState((prev) => prev + 1)}>+</button>
      <button onClick={() => setState((prev) => prev - 1)}>-</button>
    </div>
  );
}
// () => {
//   console.log("direction")
//   if (direction !== "Forward") {
//     return 0
//   } else {
//     return 60
//   }
// }

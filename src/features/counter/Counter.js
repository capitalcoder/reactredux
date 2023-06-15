import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.penghitung.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{count}</h3>
      <div>
        <button onClick={() => dispatch(increment())}>Incement</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Incr by 5</button>
      </div>
    </div>
  );
};

export default Counter;

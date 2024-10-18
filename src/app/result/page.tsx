"use client";

import { useCounter } from "../useCounter";

const CounterResult = () => {
  const { count } = useCounter();
  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <div className="flex flex-col space-y-4">
        <h1>Your counter stopped at:</h1>
        <span className="text-6xl font-bold">{count}</span>
      </div>
    </div>
  );
};

export default CounterResult;

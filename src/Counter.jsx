import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-4">Counter</h1>
      <p className="text-2xl mb-6">현재 값: {count}</p>
      <button
        onClick={handleIncrease}
        className="w-15 h-10 px-4 py-2 bg-white border hover:bg-yellow-300 cursor-pointer rounded-2xl"
      >
        +1
      </button>
      <button
        onClick={handleDecrease}
        className="w-15 h-10 px-4 py-2 bg-white border hover:bg-yellow-300 cursor-pointer rounded-2xl"
      >
        -1
      </button>
      <button
        onClick={handleReact}
        className="w-15 h-10 px-4 py-2 bg-white border hover:bg-yellow-300 cursor-pointer rounded-2xl"
      >
        Reset
      </button>
      
    </div>
  );


};

export default Counter;
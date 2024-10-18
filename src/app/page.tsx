"use client";

import Link from "next/link";
import { useCounter } from "./useCounter";

const Button = () => {
  const { inc } = useCounter();
  return (
    <button
      className="w-24 h-8 bg-purple-800 rounded font-bold hover:bg-purple-700 transition"
      onClick={inc}
    >
      +1
    </button>
  );
};

const CounterDisplay = () => {
  const { count } = useCounter();
  return (
    <div className="flex items-center justify-center w-24 h-8 bg-slate-600 rounded text-xl font-bold">
      {count}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-4 space-y-4">
      <div className="flex space-x-4">
        <CounterDisplay />
        <CounterDisplay />
      </div>
      <Button />
      <Link href="/result">
        👉 <span className="hover:underline">See result</span> 👈
      </Link>
    </div>
  );
}

'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Link from "next/link";
import { increment } from "./redux/slice";

export default function Home() {
  const random = Math.random();

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <div>
      <h1 style={{ fontSize: '40px' }}>
        This is the Home Page
      </h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button> <br />
      
      <Link href={`/about/${random}`}>About</Link>
    </div>
  );
}
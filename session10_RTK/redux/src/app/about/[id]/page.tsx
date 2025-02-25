'use client';

import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { increment } from '@/app/redux/slice';

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export default function About({ params }: Props) {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const resolvedParams = React.use(params);

  return (
    <div>
      <h1 style={{ fontSize: '40px' }}>This is the About page</h1>
      <p>The id from the slug is {resolvedParams.id}</p>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button> <br />
      <Link href="/">Home</Link>
    </div>
  );
}
import * as React from "react";

type List<T> = { list: T[] };

export default function ListInverter<T>({ list }: List<T>) {
    const invertedList = list.slice().reverse(); 
    return <div>{JSON.stringify(invertedList)}</div>;
}
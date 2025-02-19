import ListInverter from "./ListInverter";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import * as React from "react";

test("List Inverter", () => {
    render(<ListInverter list={[1, 2, 3]}/>);
    expect(screen.getByText("[3,2,1]")).toBeInTheDocument();
})
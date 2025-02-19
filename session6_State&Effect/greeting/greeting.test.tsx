import Greeting from "./greeting";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

test("Component Render", () => {
    render(<Greeting fname="Ana"/>);
    expect(screen.getByText("Hey, Ana!")).toBeInTheDocument();
})
import {screen, render, fireEvent} from "@testing-library/react"
import Counter from "./counter"
import "@testing-library/jest-dom"

test("Button Clicked", () => {
    render(<Counter />);

    const button = screen.getByText("Add")
    fireEvent.click(button)

    expect(screen.getByText("Value: 1")).toBeInTheDocument();
})
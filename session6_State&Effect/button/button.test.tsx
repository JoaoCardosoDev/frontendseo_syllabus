import {screen, render, fireEvent} from "@testing-library/react"
import Button from "./button"
import "@testing-library/jest-dom"

test("Verified Clicked", () => {
    render(<Button />);

    const button = screen.getByText("Verify")
    fireEvent.click(button)

    expect(screen.getByText("Verified: true")).toBeInTheDocument();
})
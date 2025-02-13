import Card from "./card";
import {render} from "@testing-library/react"
import "@testing-library/jest-dom"

test("Render Card Test", () => {
    const { container } = render(<Card />)
    expect(container).toBeInTheDocument();
})
import { render } from "@testing-library/react";
import Counter from "../counter/counter";

test("Must match snapshot", () => {
    const { container } = render(<Counter />)
    expect(container).toMatchSnapshot();
})
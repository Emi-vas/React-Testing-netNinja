import { render, screen } from "@testing-library/react";
import Header from "../Header";

test('render title of header', () => {
    render(<Header title={'titre1'} />)
    const headingElement = screen.getByText(/titre1/i)
    expect(headingElement).toBeInTheDocument()
})
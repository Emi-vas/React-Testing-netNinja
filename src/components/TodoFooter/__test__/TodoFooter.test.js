import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ number }) => {
    return(
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={number} />
        </BrowserRouter>
    )
}

describe('bloc TodoFooter', () => {
    test('should display the number of task passed on props', () => {
        render(<MockTodoFooter number={5} />)
        const paragraphElement = screen.getByText(/5 tasks left/i)
        expect(paragraphElement).toBeInTheDocument()
    })
    
    test('verify the plurial', () => {
        render(<MockTodoFooter number={1} />)
        const paragraphElement = screen.getByText(/1 task left/i)
        expect(paragraphElement).toBeInTheDocument()
    })
})
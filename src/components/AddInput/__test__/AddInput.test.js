import { render, screen } from '@testing-library/react';
import  userEvent  from '@testing-library/user-event'
import AddInput from '../AddInput'

describe("AddInput test", () => {
    it("should be an empty input", () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={() => {}}
            />
        )
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        expect(inputElement.value).toBe('')
    })

    it("should be able to type", () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={() => {}}
            />
        )
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        userEvent.type(inputElement, "my task")

        expect(inputElement.value).toBe("my task")
    })

    it("should be set input to null when we click on button", () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={() => {}}
            />
        )
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        userEvent.type(inputElement, "my task")
        
        const buttonElement = screen.getByRole('button', {name: "Add"})
        userEvent.click(buttonElement)

        expect(inputElement.value).toBe("")
    })
})
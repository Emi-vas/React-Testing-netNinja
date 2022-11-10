import { render, screen } from '@testing-library/react';
import  userEvent  from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo'

const MockTodo = () => {
    return(
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
    const buttonElement = screen.getByRole('button', {name: "Add"})

    tasks.forEach(task => {
        userEvent.type(inputElement, task)
        userEvent.click(buttonElement)
    })
}

describe("Todo test", () => {
    it("Add todo on your todolist", () => {
        render(<MockTodo />)
        
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        userEvent.type(inputElement, "my task")

        const buttonElement = screen.getByRole('button', {name: "Add"})
        userEvent.click(buttonElement)

        const todoElement = screen.getByText(/my task/i)
        expect(todoElement).toBeInTheDocument()
    })

    it("Add 3 tasks", () => {
        render(<MockTodo />)

        const tasks = ["first task", "second task", "third task"]
        addTask(tasks)

        const todosElement = screen.getAllByTestId('task-container')
        expect(todosElement.length).toBe(3)
    })

    it("Should not be active style first", () => {
        render(<MockTodo />)

        const tasks = ["first task"]
        addTask(tasks)

        const todoElement = screen.getByText(/first task/i)
        expect(todoElement.classList.contains('todo-item-active')).toBe(false)
    })

    it("Should have active style when you click on", () => {
        render(<MockTodo />)

        const tasks = ["first task"]
        addTask(tasks)

        const todoElement = screen.getByText(/first task/i)
        userEvent.click(todoElement)
        expect(todoElement.classList.contains('todo-item-active')).toBe(true)
    })
})
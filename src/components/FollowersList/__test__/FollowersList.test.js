import { render, screen, fireEvent, findAllByTestId, findByTestId } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {
    it('should fetch and render one element', async () => {
        render(<MockFollowersList />);

        const divElement = await screen.findByTestId('follower-item-0')
        expect(divElement).toBeInTheDocument()
    });

/*     it('should fetch and render 5 elements', async () => {
        render(<MockFollowersList />);

        const divElements = await screen.findAllByTestId(/follower-item/i)
        expect(divElements.length).toBe(5)
    }); */
})
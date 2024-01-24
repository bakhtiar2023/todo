import { render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Popup from '../Popup/Popup';
import '@testing-library/jest-dom';


describe('Popup Test', () => {
    test('should display popup', () => {
        render(<BrowserRouter><Popup styles='success' popupShow={true} popupId='popupTest'>This is test for popup</Popup></BrowserRouter>)
        const popupText = screen.getByText('This is test for popup')
        expect(popupText).toBeInTheDocument()
    })
})
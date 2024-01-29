import { render, screen, fireEvent} from '@testing-library/react';
import Input from '../Input/Input.jsx'
import '@testing-library/jest-dom';

describe('Input test', () => {
  beforeEach(() => {
    render(<Input id="todoName" type="search" name="todoName" handleChange={()=>{jest.fn()}} placeholder="large" defaultValue="cleaning my room" styles="column" inputStyles="large" labelStyles="">input:</Input>)
  });
  test('should display input text', () => {
    const labelText = screen.getByText("input:")
    expect(labelText).toBeInTheDocument()
  })
  test('should change value of input element', () => {
    const inputElement = screen.getByPlaceholderText("large")
    fireEvent.change(inputElement,{
        target: {value: 'saving money'}
    })
    let newInputValue = document.getElementById("todoName")
    expect(newInputValue.value).toBe('saving money')
  })
});

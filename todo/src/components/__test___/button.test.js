import { screen, render , fireEvent} from '@testing-library/react';
import Button from '../Button/Button';
import '@testing-library/jest-dom';

describe('Button test', () => {
  beforeEach(() => {
    render(<Button />);
  });
  test('should display Button text', () => {
    const textButton = screen.getByText('Button');
    expect(textButton).toBeInTheDocument();
  });
});

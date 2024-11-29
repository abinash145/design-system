import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

describe('Button', () => {
  it('renders button text correctly', () => {
    render(<Button size="xl" label="Button CTA" />);
    const textElement = screen.getByText('Button CTA');
    expect(textElement).toBeInTheDocument();
  });
  it('calls the onClick function when clicked', async () => {
    user.setup();
    const clicking = jest.fn();
    const { getByText } = render(
      <Button size="xl" label="Button CTA" onClick={clicking}>
        Click me
      </Button>
    );
    const buttonElement = screen.getByText('Button CTA');
    await user.click(buttonElement);

    expect(clicking).toHaveBeenCalledTimes(1);
  });
});

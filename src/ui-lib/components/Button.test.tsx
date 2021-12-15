import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@/ui-lib/components/Button';
import { createRef } from 'react';

describe('Button', () => {
  test('renders', () => {
    render(<Button />);
    screen.getByText('Button');
  });

  test('renders content', () => {
    render(<Button>Click me</Button>);
    screen.getByText('Click me');
  });

  test('handles click events', () => {
    const handler = jest.fn();

    render(<Button onClick={handler} />);

    const btn = screen.getByText('Button');
    fireEvent.click(btn);

    expect(handler).toHaveBeenCalled();
  });

  test('forwards ref to the button', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

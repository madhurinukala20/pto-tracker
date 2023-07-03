import { render, screen, fireEvent } from '@testing-library/react';
import Welcome from '@/components/Welcome';

const user = {
  username: 'madhuri',
};

describe('welcome', () => {
  test('validate welcome ', () => {
    render(<Welcome user={user} />);
    const approveButton = screen.getByTestId('welcome-user');
    fireEvent.click(approveButton);
  });
});

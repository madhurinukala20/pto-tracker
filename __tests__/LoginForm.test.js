import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '@/components/LoginForm';
import { validatePassword, validUsername } from '@/helper';

describe('login', () => {
  test('test login page ', () => {
    render(<LoginForm />);
    const username = 'madhuri';
    const password = 'Hello@123';
    expect(validUsername(username)).toBe(true);
    expect(validatePassword(password)).toBe(true);
    const loginButton = screen.getByTestId('submit-button');
    fireEvent.click(loginButton);
  });
});

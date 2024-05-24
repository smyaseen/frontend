import { fireEvent, render, screen } from '@testing-library/react';
import TestWrapper from '@/utils/testWrapper';
import LoginPage from '../useCases/performLogin';

jest.mock('@/utils/constants', () => ({
  VITE_API_URL: 'localhost:3000',
}));

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('LoginPage', () => {
  describe('LoginPage', () => {
    it('Should renders email and password inputs and submit button', () => {
      render(TestWrapper(<LoginPage />));

      expect(screen.getByTestId('email')).toBeInTheDocument();
      expect(screen.getByTestId('password')).toBeInTheDocument();
      expect(screen.getByTestId('submit')).toBeInTheDocument();
    });

    it('Should disables the submit button by default', () => {
      render(TestWrapper(<LoginPage />));

      expect(screen.getByTestId('submit')).toBeDisabled();
    });

    it('Should enables the submit button when email and password are entered correctly', () => {
      render(TestWrapper(<LoginPage />));

      fireEvent.change(screen.getByTestId('email'), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByTestId('password'), { target: { value: 'Egabcd@123' } });

      expect(screen.getByTestId('submit')).not.toBeDisabled();
    });

    it('Should disables the submit button when email is entered incorrectly', () => {
      render(TestWrapper(<LoginPage />));

      fireEvent.change(screen.getByTestId('email'), { target: { value: 'test' } }); // Invalid email
      fireEvent.change(screen.getByTestId('password'), { target: { value: 'Egabcd@123' } });

      expect(screen.getByTestId('submit')).toBeDisabled();
    });

    it('Should disables the submit button when password does not meet criteria', () => {
      render(TestWrapper(<LoginPage />));

      fireEvent.change(screen.getByTestId('email'), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByTestId('password'), { target: { value: 'pass' } }); // Invalid password

      expect(screen.getByTestId('submit')).toBeDisabled();
    });

    it('Should handles the whole journey correctly', () => {
      render(TestWrapper(<LoginPage />));

      // Initial state
      expect(screen.getByTestId('submit')).toBeDisabled();

      // Enter invalid email
      fireEvent.change(screen.getByTestId('email'), { target: { value: 'test' } });
      fireEvent.change(screen.getByTestId('password'), { target: { value: 'Egabcd@123' } });
      expect(screen.getByTestId('submit')).toBeDisabled();

      // Enter valid email and invalid password
      fireEvent.change(screen.getByTestId('email'), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByTestId('password'), { target: { value: 'pass' } });
      expect(screen.getByTestId('submit')).toBeDisabled();

      // Enter valid email and password
      fireEvent.change(screen.getByTestId('email'), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByTestId('password'), { target: { value: 'Egabcd@123' } });
      expect(screen.getByTestId('submit')).not.toBeDisabled();
    });
  });
});

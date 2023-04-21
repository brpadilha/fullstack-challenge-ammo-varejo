import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../Button';
import jest from 'jest-mock';


describe('<App />', () => {
  it('should display elements', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should display text', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  }
  );
  it('should have onClick props', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Test</Button>);

    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('should click event onClick', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Test</Button>);
    fireEvent.click(screen.getByText('Test'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
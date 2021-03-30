import { render, screen } from '@testing-library/react';
import App from './App';

test('heading text test', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello World!/i);
  expect(headingElement).toBeInTheDocument();
});

test('paragraph text test', ()=>{
  render(<App />);
  const paragraphElement = screen.getByText(/This is the react app./i)
  expect(paragraphElement).toBeInTheDocument();
})

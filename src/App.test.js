import { render, screen } from '@testing-library/react';
import App from './App';

// Now fails since I removed 'learn react' text
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Look for new text in App
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Github Actions");
  expect(linkElement).toBeInTheDocument();
});

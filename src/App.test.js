import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the component', () => {
  const component = render(<App />);
  // console.log(component.debug());
  expect(component.container).toMatchSnapshot();
});

describe('when component is provided a title', () => {
  it('shows the correct title', () => {
    const { container } = render(<App title="hello world"/>);
    expect(container).toMatchSnapshot();
  })
})

describe('when component has an error', () => {
  it('shows the error', () => {
    const { container } = render(<App showError={true} />);
    expect(container).toMatchSnapshot();
  })
})

describe('when component has children', () => {
  it('shows the children', () => {
    const { container } = render(<App><p>Hello children</p></App>);
    expect(container).toMatchSnapshot();
  })
})

import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { HelloName } from './hello-name';
import '@testing-library/jest-dom';

let container = null;

beforeEach(() => {
  global.IS_REACT_ACT_ENVIRONMENT = true;
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
  container = null;
});

it('renders Hello with name', () => {
  act(() => {
    createRoot(container).render(<HelloName name="Adam" />);
  });
  expect(container.textContent).toBe('Hello, Adam!');
  expect(container.firstChild).not.toHaveClass();
});

it('renders Hello with name and class', () => {
  act(() => {
    createRoot(container).render(
      <HelloName name="John" myClassName="another-header" />
    );
  });
  expect(container.textContent).toBe('Hello, John!');
  expect(container.firstChild).toHaveClass('another-header');
});

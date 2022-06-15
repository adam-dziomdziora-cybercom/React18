import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { HelloWorld } from './hello-world';
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

it('renders Hello World!', () => {
  act(() => {
    createRoot(container).render(<HelloWorld />);
  });
  expect(container.textContent).toBe('Hello World!');
  expect(container.firstChild).toHaveClass('header');
});

it('renders Hello World! with class', () => {
  act(() => {
    createRoot(container).render(<HelloWorld myClassName="blue-header" />);
  });
  expect(container.textContent).toBe('Hello World!');
  expect(container.firstChild).toHaveClass('blue-header');
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";
import { SearchForm } from "./components/SearchForm";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Show div", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/app/i);
});


test("Testing to see if players is visible", () => {
  const { getByTestId } = render (<App/>);
  getByTestId(/players/i);
});


test("Testing to see if players is visible", () => {
  const { getByTestId } = render (<SearchForm/>);
  getByTestId(/pinkmode/i);
});

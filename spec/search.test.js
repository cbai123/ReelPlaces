import React from "react";
import renderer from 'react-test-renderer';


import Search from "../components/search";

describe('<Search />', () => {
  it('renders a search bar', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree.children[0].type).toBe("input")
    expect(tree.children[0].props.placeholder).toBe('Location');
  });

  it('renders a submit button', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree.children[1].type).toBe("input")
    expect(tree.children[1].props.type).toBe("submit")
  })
});
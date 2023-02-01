import React from "react";
import renderer from 'react-test-renderer';
import {render, fireEvent, screen} from '@testing-library/react';
const apiKey = require('../api/apiKey');
import Search from "../components/search";

beforeEach(() => {
  fetch.resetMocks()
})

describe('<Search />', () => {
  it('renders a search bar', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree.children[0].type).toBe("input")
    expect(tree.children[0].props.placeholder).toBe('Enter a Location..');
  });

  it('renders a submit button', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree.children[1].type).toBe("input")
    expect(tree.children[1].props.type).toBe("submit")
  })

  xit('returns a status 200', async () => {
    const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/{apiKey}`)
    expect(response.status).toBe(200);
    expect(response.status).toContain('Avatar')
  });

  it('makes an API call', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: "mocked data"}))

    render(<Search />)
    fireEvent.change(screen.getByTestId('searchBar'), {
      target: {value: 'London'}
    })
    fireEvent.click(screen.getByTestId('submitBtn'))
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  it('does not make an API call without location entered', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: "mocked data"}))

    render(<Search />)
    fireEvent.click(screen.getByTestId('submitBtn'))
    expect(fetch).toHaveBeenCalledTimes(0);
  })
})

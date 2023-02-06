import React from "react";
import renderer from "react-test-renderer";
import {render,fireEvent, screen} from "@testing-library/react";
import GetList from "../components/GetList";
import '@testing-library/jest-dom'

beforeEach(() => {
  fetch.resetMocks();
})

describe("<GetList/>", () => {
  it("fetches and display the first movie title", async () => {

    fetch.mockResponseOnce(
      JSON.stringify({
        results: [
        {title: "Test Movie title"}]
      })
    );
    
    render(< GetList />)
    //const { container } = render(< GetList />)
    // const title = await container.querySelector(".movie-title")
    expect(fetch).toHaveBeenCalledTimes(1)
    const firstTitle = await screen.getByTestId("TitleID")
    //console.log(title)
    //expect(firstTitle).toHaveTextContent("ReelPlaces")

    expect(screen.getByText("Test Movie title")).toBeInTheDocument();

  });


});
import React from "react";
import renderer from "react-test-renderer";
import {render,fireEvent, screen} from "@testing-library/react";
import GetList from "./GetList";

beforeEach(() => {
  fetch.resetMocks();
})

describe("<GetList/>", () => {
  it("fetches and display the first movie title", async () => {

    const mockedResponse = fetch.mockResponseOnce(
      JSON.stringify({
        title: "Test Movie title",
        id: 200,
      })
    );
    
    render(< GetList />)
    // await screen.getByText("Test Movie title")
    // expect screen.toHaveTextContent("Test Movie title")

  });
});
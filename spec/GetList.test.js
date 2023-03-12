import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import GetList from "../components/GetList";
import "@testing-library/jest-dom";

beforeEach(() => {
  fetch.resetMocks();
});

describe("<GetList/>", () => {
  it("fetches and display the first movie title", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        results: [{ title: "Title" }],
      })
    );
    render(<GetList />);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("fetches and display the first ten titles", async () => {

    fetch.mockResponseOnce(
      JSON.stringify({
        results: [
          { title: "Title 1" },
          { title: "Title 2" },
          { title: "Title 3" },
          { title: "Title 4" },
          { title: "Title 5" },
          { title: "Title 6" },
          { title: "Title 7" },
          { title: "Title 8" },
          { title: "Title 9" },
          { title: "Title 10" },
          { title: "Title 11" },
        ],
      })
    );
    render(<GetList />);
    expect(fetch).toHaveBeenCalledTimes(1);
    const titles = await screen.findAllByTestId("TitleID");
    expect(titles).toHaveLength(10);
  });
});
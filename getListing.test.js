const getListing = require("./getListing");
// require("jest-fetch-mock").enableMocks();

describe("getListing", () => {
  it("fetches and display the first movie title", () => {
    // const setStateMock = jest.fn()
    // const useStateMock: any = (useState :any) => [useState, setStateMock];

    const mockedResponse = fetch.mockResponseOnce(
      JSON.stringify({
        title: "Test Movie title",
        id: 200,
      })
    );
    
    // const whatever = new getListing()
    // expect(getListing().getFirstTen(mockedResponse)).toBe("Test Movie title");
  
    expect(getFirstTen(mockedResponse)).toBe("Test Movie title");
    
  
  
  
  });
});
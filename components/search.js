import { Component, useState } from "react"
import MovieClient from "../api/movieClient";

const Search = () => {
  const [location, setLocation] = useState("")

  const handlesSearchChange = (e) => {
    setLocation(e.target.value)
  }

  submit = (e) => {
    e.preventDefault()

    if (location !== "") {
      const movieClient = new MovieClient()
      movieClient.loadMoviesByLocation(location, data => {console.log(data)})
    }
  }

  return(
    <form>
      <input type="text" placeholder="Enter a Location.." data-testid="searchBar" value={location} onChange={handlesSearchChange}></input>
      <input type="submit" data-testid="submitBtn" onClick={submit}/>
    </form>
  );
};

export default Search


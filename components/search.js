import { Component, useState } from "react"
import GetList from '../GetList'
import MovieClient from "../api/movieClient";
import styles from "../styles";

const Search = () => {
  const [location, setLocation] = useState("")
  const [search, setSearch] = useState(false)

  const handlesSearchChange = (e) => {
    setLocation(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()

    if (location !== "") {
      const movieClient = new MovieClient()
      movieClient.loadMoviesByLocation(location, data => {console.log(data)})
      setSearch(true)
    }
  }

  return(
    <>
      <form style={styles.searchForm}>
        <input type="text" placeholder="Enter a Location.." data-testid="searchBar" value={location} onChange={handlesSearchChange}/>
        <input style={styles.noSubmit} type="submit" data-testid="submitBtn" onClick={submit}/>
      </form>
      {search && <div>
        <GetList />
      </div>}
    </>
  );
};

export default Search


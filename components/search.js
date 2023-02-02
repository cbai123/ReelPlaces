import { Component, useState } from "react"
import MovieClient from "../api/movieClient";
import styles from "../styles";

const Search = () => {
  const [location, setLocation] = useState("")

  const handlesSearchChange = (e) => {
    setLocation(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()

    if (location !== "") {
      const movieClient = new MovieClient()
      movieClient.loadMoviesByLocation(location, data => {console.log(data)})
    }
  }

  return(
    <form style={styles.searchForm}>
      <input type="text" placeholder="Enter a Location.." data-testid="searchBar" value={location} onChange={handlesSearchChange}/>
      <input styles={styles.noSubmit} type="submit" data-testid="submitBtn" onClick={submit}/>
    </form>
    // <div style={styles.wrap}>
    //   <div style={styles.search}>
    //     <input type="text" style={styles.searchTerm} placeholder="Enter a location..." value={location} onChange={handlesSearchChange}/>
    //     <button type="submit" style={styles.searchButton} onClick={submit}>
    //       {/* <i className="fa fa-search"></i> */}
    //     </button>
    //   </div>
    // </div>
  );
};

export default Search


import { Component, useState } from "react"
import GetList from '../GetList'
import MovieClient from "../api/movieClient";
import apiKey from "../api/apiKey";
import styles from "../styles";

const Search = () => {
  const [location, setLocation] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState('')
  const [resultsVisible, setResultsVisible] = useState(false)

  const handlesSearchChange = (e) => {
    setLocation(e.target.value)
  }

  const submit = async (e) => {
    e.preventDefault()

    if (location !== "") {
      setResultsVisible(true)
      setIsLoading(true)

      fetch(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?has=locations&locations=${location}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.results);
        setIsLoading(false);
      });
    }
  }

  return(
    <>
      <form style={styles.searchForm}>
        <input type="text" placeholder="Enter a Location.." data-testid="searchBar" value={location} onChange={handlesSearchChange}/>
        <input style={styles.noSubmit} type="submit" data-testid="submitBtn" onClick={submit}/>
      </form>
      {resultsVisible && <div  style={styles.list}>
        <GetList list={list} isLoading={isLoading}/>
      </div>}
    </>
  );
};

export default Search


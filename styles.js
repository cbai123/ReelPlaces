import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fffae6',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(0, #fffae6, #fffae6, #95e1d3)',
    // backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    minHeight: "120vh",
    minWidth: "100vw",
    overflow: "hidden"
  },

  logo: {
    height: '230px',
  },

  welcomeText: {
    fontSize: 'xx-large',
  },

  searchForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  inputBar: {
    height: '20px',
    width: '270px',
    border: '3px solid #95e1d3',
    borderRadius: '25px',
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '30px',
  },

  submitBtn: {
    borderRadius: '20px',
    border: '2px solid black',
    backgroundColor: 'lightcyan',
    color: 'black',
    width: '70px',
    height: '25px',
  },

  centre: { 
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    maxWidth: '50em',
  },
  
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba (0, 0, 0, 0)',
    position: 'fixed',
    top: '0px',
    width: '100%',
    overflow: 'hidden',
    zIndex: '999',
    height: '200px',
  },

  list: {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center'
  },

  searchBtn: {
    backgroundColor: '#95e1d3',
    border: 'none',
    borderRadius: '5px',
    // padding: '5px 10px',
  },


  search: {
    width: '100%',
    position: 'relative',
    display: 'flex',
  },

  searchTerm: {
    width: '100%',
    border: '3px solid #00B4CC',
    // borderRight: 'none',
    padding: '5px',
    height: '20px',
    // borderRadius: '5px 0 0 5px',
    // outline: 'none',
    color: '#9DBFAF',
  },


  // searchTerm: focus{
  //   color: '#00B4CC',
  // },

  searchButton: {
    width: '40px',
    height: '36px',
    border: '1px solid #95e1d3',
    // background: '#00B4CC',
    textAlign: 'center',
    color: '#fff',
    // borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontSize: '20px',
  },


  /*Resize the wrap to see the search bar change!*/
  wrap: {
    width: '30%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  
  column: {
    flex: "20%",
    padding: "5px",
  },
  
  row: {
    display: "flex",
    flexWrap: "wrap",
    flex: "20%",
    padding: "5px",
  },

  // imagePadding: {
  //   padding: "4px"
  // },

  movieInfoWrapper: {
    display: "flex",
    marginLeft: "4.5vw",
    marginRight: "4.5vw",
    alignSelf: "flex-start",
    justifyContent: "center",
  },

  suggestedMoviesBox: {
    display: "flex",
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 2,
    width: "60vw",
    // marginLeft: "19vw",
    // alignSelf: "flex-end",
    padding: "10px",
    backgroundColor: "rgb(249, 249, 249, 51%)",
    boxShadow: "2px 8px 15px #888888",
    justifyContent: "space-evenly",
    marginTop: "110px",
    marginBottom: "100px"
  },

  movieInfoContent: {
    display: "flex",
    // flexDirection: "row",
    // width: "100%",
    // marginTop: "15%",
    padding: "10px",
    backgroundColor: "rgb(249, 249, 249, 51%)",
    boxShadow: "2px 8px 15px #888888",
    maxHeight: "520px"

  },

  movieImage: {
    flex: "50%",
    padding: "30px"
  },

  movieText: {
    flex: "100%",
    // marginLeft: "0%",
    lineHeight: "15pt",
    padding: "30px",
    maxWidth: "23vw",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },

  fontLoader: {
    fontFamily: 'Roboto',
  },

  movieNavbar: {
    // display: 'flex',
    // justifyContent: 'left',
    backgroundColor: 'rgba (0, 0, 0, 0)',
    position: 'fixed',
    top: '0px',
    width: '100%',
    overflow: 'hidden',
    zIndex: '999',
    height: '150px',
  },

  movieSearch: {
    float: "right",
    padding: "6px",
    border: "none",
    marginTop: "8px",
    marginRight: "16px",
    fontSize: "17px",
    display: "flex", 
  },

  moviePageLogo: {
    height: "110px",
    marginLeft: "1%",
  },

  movieTitle: {
    display: "fixed",
    // flexDirection: "row",
    width: "100%",
    marginLeft: "8.5%",
    marginTop: "8%",
    fontSize: "18px",
  },

  movieDetails: {
    display: "block",
    marginBottom: "50px",
    paddingBottom: "5px",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  suggestedMovieDetails: {
    display: "block",
    marginBottom: "50px",
    paddingBottom: "5px",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: "center"
  },

  suggestedMoviesText: {
    flex: "100%",
    marginBottom: "10%",
    lineHeight: "15pt",
    padding: "3px",
    // maxWidth: "23vw",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },

  suggestedMoviesImage: {
    padding: "4px",
    marginBottom: "5%"
  },

  suggestedMoviesContainers: {
    display: "flex",
    justifyContent: "space-evenly"
  }, 
  
  homeColumn: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flex: "25%",
    padding: "15px"
  },

  homeImage: {
    padding: "4px",
    marginTop: "10px",
    // marginBottom: "20px",
    display: "flex",
    flexWrap: "wrap",
    flex: "33.33%"
  },

  homeTitle: {
    margin: "auto",
    width: "30%",
    fontSize: 'xx-large',
    paddingBottom: "50px"
  },

  movieContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  mapStyling: {
    display: "inline",
    borderColor: "white",
    borderWidth: 2,
    width: "600px",
    height: "500px",
    marginLeft: "8vw",
    // alignSelf: "flex-end",
    padding: "20px",
    backgroundColor: "rgb(249, 249, 249, 51%)",
    boxShadow: "2px 8px 15px #888888"
  },

  mapError: {
    fontSize: "large"
  }

})

export default styles
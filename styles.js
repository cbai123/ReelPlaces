import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fffae6',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(0, #fffae6, #fffae6, #95e1d3)'
  },
  centre: {
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    // backgroundColor: '#95e1d3',
    // borderRadius: '20px',
    // boxShadow: '0 0 10px #888'
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
    height: '120px',
  },

  searchForm:{

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


  noSubmit: {
    border: '1px solid white',
    width: '100%',
    // padding: '9px 4px 9px 4px',
    /* You can use your image but having cleaner code is better, so I suggest saving the file and just linking it*/
    /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z'/%3E%3C/svg%3E") ,*/
    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg")',
    backgroundSize: '13px',
    backgroundRepeat: 'no-repeat',
    // backgroundPosition: '10px center',
  },

  column: {
    flex: "20%",
    padding: "5px",
  },
  
  /* Clear floats after image containers */
  row: {
    display: "flex",
    flexWrap: "wrap",
    flex: "20%",
    padding: "5px",
  },

  imagePadding: {
    padding: "4px"
  },

  movieInfoWrapper: {
    display: "flex"
  },

  movieImage: {
    flex: "50%",
    marginLeft: "35%"


  },
  movieText: {
    flex: "50%",
    marginRight: "30%",
    lineHeight: "15pt"
  },

  fontLoader: {
    fontFamily: 'Roboto'
  }
  

})

export default styles
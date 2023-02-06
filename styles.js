import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fffae6',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(0, #fffae6, #fffae6, #95e1d3)'
  },

  logo: {
    height: '230px',
  },

  welcomeText: {
    fontSize: 'x-large',
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
    border: '3px solid #95e1d3',
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
})

export default styles
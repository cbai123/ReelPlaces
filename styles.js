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
    height: '120px',
  },
  list: {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export default styles
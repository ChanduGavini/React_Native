import { View, Text, StyleSheet } from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance <Text style={styles.boldText}>in bold</Text>
        </Text>
      </View>
      <View style={[ styles.ligthBlueBG, styles.box, styles.boxShadow ]}>
        <Text style={{ borderRadius: 5, backgroundColor: 'red'}}>LightBlue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBG, styles.androidShadow]}>
        <Text>LightGreen Box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'plum', padding: 60},
  darkMode: {
    backgroundColor: 'black'
  },
  darkModeText: {
    color: 'white'
  },
  boldText: {
    fontWeight: 'bold'
  },
  box: {
    height: 250,
    width: 250,
    //padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 3, 
    backgroundColor: 'pink',
    borderRadius: 10
  },
  ligthBlueBG: {
    backgroundColor: 'lightblue'
  },
  lightGreenBG: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    shadowColor: 'yellow',
    elevation: 10
  }
});
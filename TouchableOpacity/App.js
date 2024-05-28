import React from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const App = () => {

  const onClick = ()=>{
    alert('Button Pressed')
  }
  const onLongClick = ()=>{
    alert('Button Long Pressed')
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Test onPress and onLongPress
        </Text>
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={onClick}
          onLongPress={onLongClick}
        >
          <Text style={styles.buttonTextStyle}>
            Press the Button
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: 'center'
  },
  textStyle:{
    textAlign: 'center',
    fontSize: 25,
    paddingVertical: 16
  },
  buttonStyle: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default App;
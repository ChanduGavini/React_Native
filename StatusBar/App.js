import { View, StatusBar, ActivityIndicator } from 'react-native';

export default function App() {
  return(
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60}}>
      <StatusBar backgroundColor='lightgreen' barStyle='default' hidden/>
      <ActivityIndicator/>
      <ActivityIndicator size='large'/>
      <ActivityIndicator size='large' color='midnightblue'/>
      <ActivityIndicator size='large' color='midnightblue' animating={false}/>
    </View>
  )
}
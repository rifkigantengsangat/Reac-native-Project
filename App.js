import { View, Text,Button,StyleSheet,TextInput} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React,{useState,useEffect} from 'react'
import HomeScreen from './Pages/HomeScreen';

const App = () => {
 
  return (
   <View style={styles.container}>
    <HomeScreen/>
   </View>
  )
}
const styles = StyleSheet.create({
  container : {
    width:'100%',
    backgroundColor:'#3AB0FF',
    height:'100%',
    flex:1,
  
  },
         
     
 
})

export default App

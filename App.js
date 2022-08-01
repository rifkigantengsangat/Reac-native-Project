import { View, Text,Button,StyleSheet,TextInput, ScrollView} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React,{useState,useEffect} from 'react'
import HomeScreen from './Pages/HomeScreen';

const App = () => {
 
  return (
   <ScrollView>
    <View style={styles.container}>
    <HomeScreen/>
    </View>
  
   </ScrollView>
  )
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    height : 200,
    backgroundColor :"blue"
  },
         
     
 
})

export default App

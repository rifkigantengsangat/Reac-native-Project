import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  )
}

export default HomeScreen

const styles =StyleSheet.create({
    container:{
        
   flexDirection:'column',
   backgroundColor:'#3AB0FF'
   
    }
})
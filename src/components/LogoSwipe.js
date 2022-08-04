import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swipe from '../assets/SwipeDel.png'
const LogoSwipe = () => {
  return (
    <View style={styles.container}>
     <Image source={Swipe} style={styles.image}/>
    </View>
  )
}

export default LogoSwipe

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginTop:40,
        height: 40
    },
    image : {
        marginLeft:'auto',marginRight:'auto',
        width: 160
    }



})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextBannerComponent = () => {
  return (
    <View style={styles.textBanner}>
     <Text style={styles.text}>Laundry for Everyone</Text>
    </View>
  )
}

export default TextBannerComponent

const styles = StyleSheet.create({
    textBanner :{
        width:260,
      height:120,
      marginTop:30,
     
      marginLeft : 51,
        flexDirection:'column',
       
    },
    text :{
        fontSize:45,
        fontWeight:'bold',
        color :'white'
    }
  
})
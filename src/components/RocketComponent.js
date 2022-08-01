import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/IconRocket.png'

const RocketComponent = () => {
  return (
    <View style={ styles.container}>
     <View style={ styles.containerImage}>
        <Image source={Icon} style={{     resizeMode: 'cover',
        flex: 1,
        aspectRatio: 1  }}/>
     </View>
  <View style={ styles.containerStart}>
    <Text style={{textAlign:'center',color:'#0076FF',fontSize:20,fontWeight:'bold' }}>Get Started</Text>
  </View>
    </View>
  )
}

export default RocketComponent

const styles = StyleSheet.create({
    container : {
        width :'100%',
        height:450,
     flexDirection:'column'
   
    },
    containerImage : {
   
     flexDirection: 'row',
   
     backgroundColor:"red"
    
    },
    containerStart : {
       
    }
})
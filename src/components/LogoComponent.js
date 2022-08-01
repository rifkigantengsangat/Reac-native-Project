import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../assets/logo.png'
const LogoComponent = () => {
  return (
    <View style={styles.container}>
     <View>
      <Image source={Logo}/>
     </View>
     <View style={styles.containerText}>
        <Text style={styles.TextLogo}>
            Goldville  Laundry
        </Text>
     </View>
    </View>
  )
}

export default LogoComponent

const styles = StyleSheet.create({
    container :{
  flexDirection:'row',
   marginTop: 55,
   marginLeft:48,

   alignItems:'center'
    },
    image : {
        width:73,
        height:73
    },
    containerText : {
        width:110,
        marginLeft:10
        
    },
    TextLogo:{
        color: '#FFFFFF',
        fontSize:26,
        fontWeight:'500',
      textShadowColor:'black',
      textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10, 
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogoComponent from '../../components/LogoComponent'
import TextBannerComponent from '../../components/TextBannerComponent'
import RocketComponent from '../../components/RocketComponent'
const Splash = () => {
  return (
    <View style={styles.container}>
     <LogoComponent/>
     <TextBannerComponent />
     <RocketComponent/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
 container :{
   backgroundColor : '#0083FF',
   width:'100%',
   height:'100%',
 }
})
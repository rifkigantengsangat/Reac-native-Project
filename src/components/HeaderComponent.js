import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import vector from '../assets/Vector.png'
import Cart from '../assets/cart.png'

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <View style={{ marginHorizontal:50}}>
       <Image source={vector} style={{ color:'#000000' }}/>
      </View>
      <View  style={{ marginHorizontal:50 }}>
      <Image source={Cart} style={{ color:'#000000' }}/>
      </View>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
    header :{
    
        height:100,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
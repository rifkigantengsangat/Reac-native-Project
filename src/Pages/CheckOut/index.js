import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderCheckout from '../../components/HeaderCheckout'
import LogoSwipe from '../../components/LogoSwipe'
import CardCheckOut from '../../components/CardCheckOut'

const CheckOut = () => {
  return (
    <View style={styles.container}>
     <HeaderCheckout/>
     <LogoSwipe/>
     <CardCheckOut/>
    </View>
  )
}

export default CheckOut

const styles = StyleSheet.create({
  flex:1,
})
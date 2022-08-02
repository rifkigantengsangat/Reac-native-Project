import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import TextHomeComponent from '../../components/TextHomeComponent'
import TextSubsComponent from '../../components/TextSubsComponent'
import CardComponent from '../../components/CardComponent'

const Home= () => {
  return (
    <View style={styles.container}>
    <HeaderComponent/>
    <TextHomeComponent/>
    <TextSubsComponent/>
    <CardComponent/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor : '#F2F2F2',
    height: '100%',
  }
})
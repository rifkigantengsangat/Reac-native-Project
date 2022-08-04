import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {StoreContextProvider} from './Context'
import Router from './router'

const App = () => {
  return (
    <NavigationContainer>
      <StoreContextProvider>
   <Router/>
   </StoreContextProvider>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home'
import Splash from '../Pages/Splash'
import Pesanans from '../Pages/Pesanans'
import Akun from '../Pages/Akun'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp =()=>{
  return(
  
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesanans" component={Pesanans} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  
  )
}
const Router = () => {
  return (
   <Stack.Navigator initialRouteName='Splash'>
    
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown : false}}/>
   <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown : false}}/>
   </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
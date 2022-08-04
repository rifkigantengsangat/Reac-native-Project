import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home'
import Splash from '../Pages/Splash'
import Pesanans from '../Pages/Pesanans'
import DetailProd from '../Pages/DetailProd'
import Akun from '../Pages/Akun'
import homeIcon from '../assets/home.png'
import UserIcon from '../assets/user.png'
import CheckOut from '../Pages/CheckOut';
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp =()=>{
  return(
  
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#F2F2F2',
      },
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{ 
        headerShown:false,
        title : 'Home',
        tabBarIcon :({})=>{
          return(
            <Image source={   homeIcon }/>
          )
        }
       }} />
      <Tab.Screen name="Akun" component={Akun}  options={{ headerShown : false,
      title:'Account',
      tabBarIcon : ()=>{
        return (
          <Image source={UserIcon}/>
        )
      }
      
      }}/>
      <Tab.Screen name="Pesanans" component={Pesanans} options={{ headerShown : false,
      
      }}/>
    </Tab.Navigator>
  
  )
}
const Router = () => {
  return (
   <Stack.Navigator initialRouteName='Splash'>
    
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown : false}}/>
   <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown : false}}/>
   <Stack.Screen name="DetailProd" component={DetailProd} options={{ headerShown : false}}/>
<<<<<<< HEAD
=======
   <Stack.Screen name="CheckOut" component={CheckOut} options={{ headerShown : false}}/>
>>>>>>> dev
   </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
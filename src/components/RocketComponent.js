import { Image, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Icon from '../assets/IconRocket.png'

const RocketComponent = () => {
  const navigation = useNavigation()
  const handlePress =()=>{
    navigation.navigate("MainApp")
  }
  return (
  <View style={styles.container}>
    <View style={styles.containerImage}>

       <Image source={Icon} style={{  resizeMode: 'cover',alignSelf: 'center',width:400,marginBottom:20}}/>
    </View>
 <View onPress={()=>handlePress()} style={{ width:314,backgroundColor:'white',height:70,marginLeft:'auto',marginRight:'auto',borderRadius : 30,marginBottom:20,padding:20 }}>
  <Text onPress={()=>handlePress()}style={{ textAlign:'center',fontSize:20,fontWeight:'bold',color:'#0076FF' }}>GET STARTED</Text>
 </View>
  
  </View>
  )
}

export default RocketComponent

const styles = StyleSheet.create({
container :{
 flex : 1,
 flexDirection : "column",


},
containerImage : {
  flex:1,
  alignItems:'center',
 justifyContent:'center'
  
 
}
})
import { StyleSheet, Text, Image,View,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import Search from '../assets/search.png'
import back from '../assets/back.png'
import { useNavigation } from '@react-navigation/native';
const HeaderCheckout = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.header}>
    <TouchableWithoutFeedback onPress={()=>navigation.goBack(null)}>

    <View style={{ marginHorizontal:50}} >
        
       <Image source={back} style={{ color:'#000000' }} />
      </View>
    </TouchableWithoutFeedback>
      <View>
        <Text style={{ color:'#000000',fontSize:20,fontWeight:'bold' }}>Cart</Text>
      </View>
      <View  style={{ marginHorizontal:50 }}>
     
      </View>
   
    </View>
  )
}

export default HeaderCheckout

const styles = StyleSheet.create({
    header :{
    
        height:100,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
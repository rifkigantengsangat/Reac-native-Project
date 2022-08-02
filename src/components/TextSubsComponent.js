import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextSubsComponent = () => {
  return (
    <View style={styles.container}>
    <View style={styles.Text}>
    <Text style={{ fontSize:20,fontWeight: 'bold',color:'black'}}>
    Subscribe to <Text style={{ color:'#0083FF' }}>Laundry+</Text>  to get monthly worth of laundry
    </Text>
    </View>
    </View>
  )
}

export default TextSubsComponent

const styles = StyleSheet.create({
    container :{
      width:'100%',
      height:100,
      flexDirection:'row',
      marginTop:25,
     
    },
    Text: {
       width:'90%',
       height:'100%',
       backgroundColor:'#FFFFFF',
       borderRadius:30,
       alignItems: 'center',
       justifyContent: 'center',
       paddingHorizontal:30,
       marginLeft:'auto',
       marginRight:'auto',
       elevation:4
      
    }
})
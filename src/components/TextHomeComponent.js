import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextHomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:36,lineHeight:50,fontWeight: 'bold',fontFamily: 'Helvetica',letterSpacing:1}}>
        <Text style={{ color:'black' }}>
            Welcome&nbsp;
        </Text>
        <Text style={{ color:'#0083FF',paddingRight:20 }}>
        Rifky!
        </Text>
       
       
      </Text>
    </View>
  )
}

export default TextHomeComponent

const styles = StyleSheet.create({
    container :{
        width: 183,
        height: 110,
        marginLeft:50,
       
        
    }
})
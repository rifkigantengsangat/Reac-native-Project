import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonCheckOut = ({handleCheckOut}) => {
  return (
    <View style={styles.container}>
     <View style={styles.containerButton}>
     <TouchableOpacity onPress={()=>handleCheckOut()} style={styles.buttonTouch}>
        <Text style={styles.text}>Complate Order</Text>
     </TouchableOpacity>
     </View>
    </View>
  )
}

export default ButtonCheckOut

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:100,
    },
    containerButton: {
        width:314,
       backgroundColor: '#0083FF',
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:10,
        height:60,
        display:'flex',
        justifyContent: 'center',
        elevation:3,
        borderRadius:20, 
    },
    text:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:16,
    },
    buttonTouch : {
        width:'100%',
    }
})
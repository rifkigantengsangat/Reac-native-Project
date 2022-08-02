import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import washing from '../assets/wash.png'
import setrikaan from '../assets/setrikaan.png'
import jemuran from '../assets/jemuran.png'
import tambah from '../assets/tambah.png';
const CardComponent = () => {
  return (
    <View style={styles.container}>
   <View style={styles.card}>
   <Image source={washing} style={styles.image}/>
   <Text style={styles.text} >Wash And Iron</Text>
   </View>
   <View style={styles.card}>
   <Image source={setrikaan} style={styles.image}/>
   <Text style={styles.text} >Ironing</Text>
   </View>
   <View style={styles.card}>
   <Image source={jemuran} style={styles.image}/>
   <Text style={styles.text} >Dry Cleaning</Text>
   </View>
   <View style={styles.cardPlus}>
   <Image source={tambah} style={styles.image}/>
   <Text style={styles.textTambah} >Laundry</Text>
   </View>
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 500,
        justifyContent: 'center',
        marginTop:20,

    },
    card : {
        width:150,
        marginVertical:10,
        marginHorizontal:20,
        borderRadius : 30,
        height:150,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5
    },
    image:{
        width:70,height:60,resizeMode:'contain'
    },
    text:{
        color: 'black',
        fontSize:18,
        fontWeight: 'bold',
        paddingTop:20
    },
    cardPlus : {
        width:150,
        marginVertical:10,
        marginHorizontal:20,
        borderRadius : 30,
        height:150,
        backgroundColor: '#00B0FE',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2
    },
    textTambah:{
        color: 'white',
        fontSize:18,
        fontWeight: 'bold',
        paddingTop:20
    },
})
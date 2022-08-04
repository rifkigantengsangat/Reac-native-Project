import { Image, StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import {data} from '../Data'
import { Store } from '../Context'
import ButtonCheckOut from './ButtonCheckOut'

const CardCheckOut = () => {
    const {store,formatRupiah} = Store()
    console.log(store)
    const handleCard = ()=>{
        if(!store.length){
         <Text>Not Found</Text>
        }else if(store.length===1){
           <Text>{store.harga}</Text>
        }else{
            console.log("bisa di map")
        }
    }
  return (
    <View>
   {handleCard}
    </View>
//     <>
//     <View style={styles.container}>
// <View style={styles.containerCard}>
// {data.map((cards,index)=>{
// return(
//     <View style={styles.card}>
//         <View style={styles.left}>
//        <View>    
//     <Image source={cards.icon}/>
//     </View>
//     <View style={{ marginLeft:6 }}>
//         <Text style={{ fontWeight: 'bold',fontSize:16,color: '#000000'}} > {cards.title}</Text>
//         <Text style={{ fontWeight: 'bold',fontSize:13,color: '#000000'}} > {formatRupiah(cards.harga)}/{cards.kg}Kg</Text>
//     </View>
//     </View>
//     <View>
//      <View style={styles.dataTambah}>
//     <View style={{}}>
//        <TouchableOpacity onPress={()=>handleKurang(cards)} style={styles.button}>
//         <Text style={styles.textbutton}>-</Text>
//        </TouchableOpacity>
//     </View>
//     <View>
//        <Text style={{ fontWeight: 'bold',fontSize:15,color:'black' }}>{cards.jumlah}</Text>
//     </View>
//     <View>
//     <TouchableOpacity onPress={()=>handleTambah(cards)} style={styles.button}>
//         <Text style={styles.textbutton}>+</Text>
//        </TouchableOpacity>
//     </View>
//      </View>
//     </View>
//     </View>
// )
// })}
// </View>
// </View>
// <ButtonCheckOut handleCheckOut={()=>handleCheckOut()}/>
// </>
  )
}

export default CardCheckOut

const styles = StyleSheet.create({})
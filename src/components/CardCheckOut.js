import { Image, StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import {data} from '../Data'
import { Store } from '../Context'
import ButtonCheckOut from './ButtonCheckOut'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const CardCheckOut = () => {
    const {store,formatRupiah} = Store()
    const [total,setTotal] = useState(0)
useEffect(()=>{
  const reduceData = store.reduce((curr,item)=>{
    return curr + (item.harga * item.jumlah)
   },0)
   setTotal(reduceData)
},[total,store])
        console.log(store);
  return (
    <>
      <View style={styles.container}>
   <View style={styles.containerCard}>
   {store.map((cards,index)=>{
    return(
        <View style={styles.card}>
            <View style={styles.left}>
           <View>    
        <Image source={cards.icon}/>
        </View>
        <View style={{ marginLeft:6 }}>
            <Text style={{ fontWeight: 'bold',fontSize:16,color: '#000000'}} > {cards.title}</Text>
            <Text style={{ fontWeight: 'bold',fontSize:13,color: '#000000'}} > {formatRupiah(cards.harga)}/{cards.kg}Kg</Text>
        </View>
        </View>
        <View>
         <View style={styles.dataTambah}>
        <View style={{}}>
           <TouchableOpacity style={styles.button}>
            <Text style={styles.textbutton}>-</Text>
           </TouchableOpacity>
        </View>
        <View>
           <Text style={{ fontWeight: 'bold',fontSize:15,color:'black' }}>{cards.jumlah}</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textbutton}>+</Text>
           </TouchableOpacity>
        </View>
         </View>
        </View>
        </View>
    )
   })}
   </View>
    </View>
    {/* <ButtonCheckOut handleCheckOut={()=>handleCheckOut()}/> */}
    </>


  )
}

export default CardCheckOut

const styles = StyleSheet.create({
  container :{
       
    height: 300,
    marginTop:20,
},
containerCard : {
    flexDirection: 'column',
   
    alignItems: 'center',
    flex:1,
},
card : {
    backgroundColor : 'white',
    flex:1,
    flexDirection:'row',
    width:'80%',
    marginVertical:10,
    borderRadius : 30,
    alignItems: 'center',
    elevation:3,
    justifyContent: 'space-between',

},
left:{
    flexDirection:'row',
    marginLeft:20,
    
},
dataTambah : {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:90,
    marginRight:20
},
button : {
   width:30,
 paddingTop:7,
   backgroundColor: '#EEEEEE',
   height:40,
   borderRadius : 10,
},
textbutton : {
    textAlign:'center',
    color:'black',
    fontSize:20
},
// buttonCheckout :{
// flex:1,


// }
  
})
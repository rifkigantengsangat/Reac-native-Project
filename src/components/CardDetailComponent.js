import { Image, StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import {data} from '../Data'
import { Store } from '../Context'
import ButtonCheckOut from './ButtonCheckOut'
import { useNavigation } from '@react-navigation/native';
const CardDetailComponent = () => {
    const navigation = useNavigation()
    const {setStore,store,formatRupiah} = Store()
    const [dataDetail,setDataDetail] = useState(data)
    const [carts,setCarts] = useState([])
    const handleTambah =(cart)=>{
    setCarts([...carts,cart])
   const prod = dataDetail.find((ids)=>ids.id === cart.id)
   prod.jumlah+=1
   const updateProd = dataDetail.map((ids)=>{
    if(ids.id ===cart.id)return prod
    return ids
    
   })

   setDataDetail(updateProd)
    }
    const handleKurang =(cart)=>{
        const prod = dataDetail.find((ids)=>ids.id === cart.id)
        if(prod.jumlah == 0){
            prod.jumlah =0
        }else{
        prod.jumlah-=1
        }
        const updateProd = dataDetail.map((ids)=>{
         if(ids.id ===cart.id)return prod
         return ids
         
        })
        setDataDetail(updateProd)
         }

    const handleCheckOut=()=>{
    const unique = [...new Set(carts)]
    setStore(unique)
    navigation.navigate("CheckOut")
    }
    useEffect(()=>{

    },[dataDetail,carts])
   
  return (
    <>
        <View style={styles.container}>
   <View style={styles.containerCard}>
   {dataDetail.map((cards,index)=>{
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
           <TouchableOpacity onPress={()=>handleKurang(cards)} style={styles.button}>
            <Text style={styles.textbutton}>-</Text>
           </TouchableOpacity>
        </View>
        <View>
           <Text style={{ fontWeight: 'bold',fontSize:15,color:'black' }}>{cards.jumlah}</Text>
        </View>
        <View>
        <TouchableOpacity onPress={()=>handleTambah(cards)} style={styles.button}>
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
    <ButtonCheckOut handleCheckOut={()=>handleCheckOut()}/>
    </>

  )
}

export default CardDetailComponent

const styles = StyleSheet.create({
    container :{
       
        height: 700,
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
    buttonCheckout :{
   flex:1,
   

    }
})
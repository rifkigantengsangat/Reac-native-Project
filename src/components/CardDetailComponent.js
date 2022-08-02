import { Image, StyleSheet, Text, View,Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import {data} from '../Data'
const CardDetailComponent = () => {
    const [dataDetail,setDataDetail] = useState(data)
    const formatRupiah =(rp)=>{
        const format = rp.toString().split('').reverse().join('')
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')
        return rupiah
    }
    const handleTambah =(cart)=>{
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

    const hasilkan = (id,harga)=>{
      
    }
    useEffect(()=>{

    },[dataDetail])
  return (
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
        <View style={{ backgroundColor:"red",width:30,borderRadius:20}}>
            <Button 
            title="+"
            onPress={()=>handleTambah(cards)} 
           style={{ color:'red',paddingVertical:20 }}
            />
        </View>
        <View>
           <Text style={{ fontWeight: 'bold',fontSize:15,color:'black' }}>{cards.jumlah}</Text>
        </View>
        <View>
            <Button 
            title="-"
            onPress={()=>handleKurang(cards)}
            style={{ color:'red', backgroundColor:'black'}}
            />
        </View>
         </View>
        </View>
        </View>
    )
   })}
   </View>
    </View>
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
       
    }
})
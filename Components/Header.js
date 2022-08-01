import { View, Text,TouchableHighlight,StyleSheet,Image} from 'react-native'
import React,{useEffect, useState} from 'react'

const Header = ({soal}) => {
    const [benar,setBenar] = useState(false)
    const [poin,setPoin] = useState(0)
    const [message,setMessage]= useState('')
    const handlePress =(text,answer)=>{
        const target =text._dispatchInstances.memoizedProps.children
        if(target!==answer){
        setBenar(false)
        setMessage("Anda Salah ")
        setPoin(poin=>poin -10)
        }else{
        setBenar(true)
        setPoin(poin=>poin +10)
        setMessage("Anda Benar")
        }
    }
  useEffect(() => {
    const sto = setTimeout(() => {
      setMessage("")
    }, 5000);
  
    return () => {
      clearTimeout(sto)
    }
  }, [])
  
  return (
   <View style={styles.container}>
  <View style={styles.Soal}>
   {soal.map((soals,index)=>{
    return (
     <View style={{flexDirection:'row' }}>

       <View >
     <Text>{index+1}</Text>
       </View>
       <View style={{ flex:1,backgroundColor:'red',borderRadius:20 ,alignItems: 'center'}}>
        <Text style={{ color:"white"}}>{soals.soal}</Text>
         <Text onPress={(Text)=>handlePress(Text,soals.answer)}>{soals.pr1}</Text>
         <Text onPress={(Text)=>handlePress(Text,soals.answer)}>{soals.pr2}</Text>
         <Text onPress={(Text)=>handlePress(Text,soals.answer)}>{soals.pr3}</Text>
       </View>
     </View>
    )
   })}
  </View>
  <View style={{ flex:1,backgoundColor:'red' }}>
    <Text>{message}</Text>
    <Text>Poinmu {poin}</Text>

  </View>
   </View>
  )
}

export default Header
const styles = StyleSheet.create({
   container : {
    height :200,
    marginTop:20,
    flexDirection: 'row',
     
   },
   Soal:{
   flex :1,
      
    marginHorizontal : 20
   }
})
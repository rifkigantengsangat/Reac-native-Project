import { View, Text,StyleSheet,Image, TextInput, Button } from 'react-native'
import React,{useState}from 'react'
import Header from '../Components/Header'
const HomeScreen = () => {
    const namaHewan =[{
      soal : "Siapa Nama Saya",
      pr1 :'Ocan',
      pr2 : "Rifki",
      pr3: "maung",
      answer : "maung"
    }]
    const [query,setQuery]=useState('')
    const [soal,setSoal] = useState(namaHewan)
    const handlePress =(answer)=>{
       
    }
    const handleText =(text)=>{
    setQuery(text)
    }
  return (
    <View>
   <View style={styles.container}>
     <View style={styles.wrapper}>
        <View style={styles.input}>
            <TextInput
            title="Home Screen"
            style={{ borderWidth:2,width:200,marginLeft:'auto',marginRight:'auto', borderColor:'white',alignItems: 'center',borderRadius:20,color:'white',padding:20 }}
            placeholder="masukan Data Anda"
            onChangeText={(Text)=>handleText(Text)}
            />
        </View>
        <View style={{ marginHorizontal:20,flex:1 }}>
            <Text style={{ backgroundColor:'white',textAlign:'center',padding:10,borderRadius:20,color:'black',fontWeight:'600', }}
            
            >
                Cari
            </Text>
        </View>
     </View>
   </View>
   <Header soal={soal}/>
   </View>
  )
}

export default HomeScreen

const styles =StyleSheet.create({
    container:{
    width: '100%',
    height:60,    
    },
    wrapper :{
        width: '90%',
        marginLeft: "auto",
        marginRight: "auto",
        height: '100%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center'
    },
    input: {

    }
})
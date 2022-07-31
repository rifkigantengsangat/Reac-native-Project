import { View, Text,TouchableHighlight,StyleSheet} from 'react-native'
import React from 'react'

const Header = () => {
    const handlePress =()=>{
    }
  return (
    <View style={styles.containerHeader} >
        <TouchableHighlight onPress={handlePress}>
     <View style={styles.containerText}>
     <Text>SMK WIKRAMA BOGOR</Text>
     </View>
      </TouchableHighlight>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
    containerHeader : {
      alignItems: 'center',
       padding:20 ,       
       width:'100%'
        
        
    },
    containerText:{
        width:100,
        backgroundColor:"red"
    }
})
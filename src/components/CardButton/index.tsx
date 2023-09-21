import React from 'react'
import { TouchableOpacity, View, Dimensions, Text } from 'react-native'

const {width,height} = Dimensions.get('window')

function CardButton() {
  return (
    <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:height*0.08,position: 'absolute', bottom:0,width:'100%',backgroundColor:'white'}}>
        <View style={{backgroundColor:'#5D39C1',flexDirection:'row',alignItems:'center',height:height*0.06,justifyContent:'center',width:'88%',marginHorizontal:'6%',borderRadius:10}}>
            <Text style={{fontSize:14,fontWeight:'bold',color:'white'}}>Sepete Ekle</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CardButton

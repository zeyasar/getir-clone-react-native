import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';


const HeaderMain = () => {
  return (
    <View testID='header-main' style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
        <View style={styles.headerOneView}>
            <Text testID='place-text' style={{fontWeight:'600', fontSize:16}}>Ev</Text>
            <Text style={{fontWeight:'400', fontSize:11, color:'#6e7480', marginLeft:7, marginRight:3}}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
            <Entypo testID="right-icon" name="chevron-right" size={24} color="#5d3ebd" />
        </View>  
      </View>

      <View style={styles.headerTwo}>
        <Text style={{fontSize:10,color:'#5D3EBD',fontWeight:'bold',textAlign:'center'}}>TVS</Text>
            <Text style={{fontSize:20,color:'#5D3EBD',fontWeight:'bold',textAlign:'center'}}>
                13<Text style={{fontSize:16,color:'#5D3EBD',fontWeight:'bold',textAlign:'center'}}>dk</Text>
            </Text>
        </View>
    </View>
  )
}

export default HeaderMain

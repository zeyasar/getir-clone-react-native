import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const DetailProperty = () => {

  const [details, setDetails] = useState<string[]>(
    [
        "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
        "İçindekiler",
        "Besin Değerleri",
        "Kullanım",
        "Ek Bilgiler",
    ]
  )

  const TextComponent = ({detail,index}:{detail:string,index:number}) => {
    return(<View style={{
        paddingVertical:12,
        borderBottomColor: 'lightgray',
        borderBottomWidth: index==details.length -1 ? 0 : 0.3,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    }}>
        <Text style={{color:index == 0 ? '#4e4e4e' :'#687482',
        fontWeight: index===0? '400' :'500',
        fontSize:index===0? 11:13
    }}>{detail}</Text>
        {index !=0 && <Feather name="chevron-down" size={24} color="#9F9F9F" />}
    </View>)
  }

  return (
    <View style={{ paddingHorizontal: 16, paddingVertical:8 ,backgroundColor: "white", }}>
    {details.map((item,index) => (
      <TextComponent detail={item} index={index} key={index}/>
    ))}
  </View>
  )
}

export default DetailProperty

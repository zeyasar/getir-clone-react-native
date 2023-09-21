import React from 'react'
import { Text, View } from 'react-native'
import { Product } from '../../models'

type DetailBoxProps={
    product:Product
}

function DetailBox({product}:DetailBoxProps) {
  return (
    <View
        style={{
            width:'100%',
            backgroundColor:'white',
            alignItems:'center',
        }}
    >
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 20,
            marginTop:12
          }}
        >
          <Text>{"\u20BA"}</Text>{product.fiyat}
        </Text>
        
        <Text style={{fontWeight:'700',fontSize:16,marginTop:12}}>{product.name}</Text>
        <Text style={{color:'#848897',fontWeight:'600',marginTop:8,paddingBottom:18}}>{product.miktar}</Text>
    </View>
  )
}

export default DetailBox

import React from 'react'
import { TouchableOpacity, View, Dimensions, Text } from 'react-native'
import {connect} from "react-redux"
import * as actions from "../../redux/actions/cartActions"
import { Product } from '../../models'

const {width,height} = Dimensions.get('window')

type cartButtonType={
  item:Product;
  addItemToCart:(a: Product) => void;
}

function CardButton({item, addItemToCart}:cartButtonType) {
  return (
    <TouchableOpacity onPress={() => addItemToCart(item)} style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:height*0.08,position: 'absolute', bottom:0,width:'100%',backgroundColor:'white'}}>
        <View style={{backgroundColor:'#5D39C1',flexDirection:'row',alignItems:'center',height:height*0.06,justifyContent:'center',width:'88%',marginHorizontal:'6%',borderRadius:10}}>
            <Text style={{fontSize:14,fontWeight:'bold',color:'white'}}>Sepete Ekle</Text>
        </View>
    </TouchableOpacity>
  )
}

const mapDispatchToProps=(dispatch) => {
  return {
    addItemToCart: (product:Product) => 
      dispatch(actions.addToCart({quantity:1,product}))
  }
}

export default connect(null,mapDispatchToProps)(CardButton);

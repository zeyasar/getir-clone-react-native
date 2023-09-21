import React from 'react'
import { FlatList, Text } from 'react-native'
import productsGetir from '../../../assets/productsGetir'
import CartItem from '../../components/CartItem'

function CartScreen() {
  return (
    <FlatList
        data={productsGetir}
        renderItem={({item}) => <CartItem product={item}/>}
    >
        
    </FlatList>
  )
}

export default CartScreen

import React, {useEffect, useState} from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { Product } from '../../models'
import ImageCarousel from '../../components/ImageCarousel'
import DetailBox from '../../components/DetailBox'
import DetailProperty from '../../components/DetailProperty'
import CardButton from '../../components/CardButton'


// type ProductDetailScreenProps={
//   route: RouteProp<YourNavigatorParams, 'ProductDetails'>;
//   product:Product
// }

function ProductDetailsScreen(props) {

  const [ product, setProduct ] = useState<Product>()
  useEffect(() => {
    setProduct(props.route.params.product)
  }, [])

  if(!product){
    return <ActivityIndicator color={'#5d3ebd'} />
  }


  return (
   <View style={{flex:1}}>
    <ScrollView style={{flex:1,backgroundColor:'#f5f5f5'}}> 
    <ImageCarousel images={product?.images}/>
    <DetailBox product={product}/>
    <Text
    style={{
      paddingHorizontal:10,
      paddingVertical:14,
      color:'#808b99',
      fontWeight:'600',
    }}
    >Detaylar</Text>
    <DetailProperty/>
    </ScrollView>
    <CardButton item={product}/>
   </View>
  )
}

export default ProductDetailsScreen

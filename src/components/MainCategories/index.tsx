import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CategoryItem from '../CategoryItem'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'



function MainCategories() {

    
    const [categories, setCategories] = useState<Category[]>(categoriesGetir)

  return (
    <View>
        <View style={styles.listContainer}>
            {
                categories.map((item) => (
                    <CategoryItem key={item.id} item={item}/>
                ))
            }
            
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',

    }
})

export default MainCategories

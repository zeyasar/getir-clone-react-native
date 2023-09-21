import React, { useState } from "react";
import { Dimensions, ScrollView, View, Text } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";


const { height, width } = Dimensions.get("window");

const CategoryBox=({active,item}:{active:Category,item:Category}) => {
    // console.log("The title is ",active)
    return(
        <View style={[{flexDirection:'row',alignItems:'center',justifyContent:'center', paddingHorizontal:9},item == active && {borderBottomColor:"#FFD00C",borderBottomWidth:2.5}]}>
            <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>{item.name}</Text>
        </View>
    )
}

function CategoryFiltering({category}:{category:Category}) {

  const [ categories, setCategories ] = useState<Category[]>(categoriesGetir)

  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
        {
            categories.map((item) => (
                <CategoryBox key={item.id} item={item} active={category} />
                ))
        }

    </ScrollView>
  );
}

export default CategoryFiltering;

import React from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import {connect} from "react-redux";
import * as actions from "../../redux/actions/cartActions"

const { width, height } = Dimensions.get("screen");

type ProductItemType={
  item:Product;
  addItemToCart:(a: Product) => void;
}

function ProductItem({item, addItemToCart}:ProductItemType) {

  const navigation = useNavigation()

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate("ProductDetails",{product:item})}
      style={{
        width: width * 0.285,
        marginTop: 12,
        height: height * 0.25,
        marginLeft: 12,
        marginBottom: 10,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: "grey",
        }}
        source={{uri:item.image}}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 11,
            color: "#747990",
            textDecorationLine: "line-through",
            fontWeight: "bold",
          }}
        >
          <Text>{"\u20BA"}</Text>{item.fiyat}
        </Text>
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          <Text>{"\u20BA"}</Text>{item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontWeight: "600", fontSize: 13, marginTop: 4 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "600",
        }}
      >
        {item.miktar}
      </Text>

      <TouchableOpacity onPress={() => {addItemToCart(item)}}
        style={{
          position: "absolute",
          borderWidth: 0.3,
          right: -10,
          top: -10,
          borderRadius: 5,
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
          borderColor: "lightgrey",
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: 30,
          height: 30,
        }}
      >
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product:Product) => 
      dispatch(actions.addToCart({quantity:1,product}))
  }
}

export default connect(null,mapDispatchToProps)(ProductItem);

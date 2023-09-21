import React from "react";
import { Text, View } from "react-native";
import ProductItem from "../ProductItem";
import productsGetir from "../../../assets/productsGetir";

function ProductsContainer() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: 10,
        }}
      >
        {productsGetir.slice(0, 2).map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </View>
      <Text style={{ color: "gray", fontWeight: "bold", padding: 14 }}>
        Çubuk
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          flexWrap: "wrap",
          width: "100%",
          backgroundColor: "white",
          paddingVertical: 10,
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default ProductsContainer;

import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Entypo, Ionicons, Foundation,MaterialCommunityIcons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import { connect } from 'react-redux';
import { Product } from "../models";
import * as actions from "../redux/actions/cartActions"


const Stack = createStackNavigator();
const tabHiddenRoutes = ["ProductDetails","CartScreen"];
const {width, height} = Dimensions.get('window')

function MyStack({ navigation, route,cartItems,clearCart }:{cartItems:{product:Product, quantity:number}[],clearCart: () => void}) {

  const [totalPrice,setTotalPrice] = useState<number>(0)
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    // console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      // console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      // console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  const navigation2 = useNavigation()

  const getProductsPrice = () => {
    var total=0
    cartItems.forEach(cartItem => {
      const price = (total += cartItem.product.fiyat)
      setTotalPrice(price)
    })
  } 
  useEffect(() => {
    getProductsPrice()

    return (() => {
      setTotalPrice(0)
    })

  },[navigation,route,cartItems])


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              resizeMode="contain"
              style={{ width: 70, height: 30 }}
              source={require("../../assets/getirlogo.png")}
            />
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
            onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{ width: 5, height: 30, backgroundColor: "white" }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#F3EFFE",
                  height: 30,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  justifyContent:'center',alignItems:'center'
                }}
              >
                <Text
                  style={{
                    color: "#5D3EBD",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  <Text>{"\u20BA"}</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen 
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerTitleAlign:'center',
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation2.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons
                style={{ marginLeft: 8 }}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Foundation
                style={{ marginRight: 8 }}
                name="heart"
                size={26}
                color="#32177a"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerTitleAlign:'center',
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons
                style={{ marginLeft: 4 }}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity 
            onPress={() =>clearCart()} 
            style={{ paddingRight: 10 }}> 
              <Ionicons style={{marginRight:8}} name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => {
  const {cartItems} = state;
  return {
    cartItems: cartItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart())
  }
}

function HomeNavigator({ navigation, route,cartItems,clearCart}:{cartItems:Product[],clearCart:() => void}) {
  return <MyStack navigation={navigation} route={route} cartItems={cartItems} clearCart={clearCart} />;
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeNavigator)

import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeNavigator from './HomeNavigator'
import { Entypo,Feather,FontAwesome ,MaterialCommunityIcons} from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator()

function RootNavigator() {

    const CustomTabBarButton = () => {
        return(
            <TouchableOpacity
            style={{
                borderColor: "white",
                borderWidth: 2,
                borderRadius: 32,
                justifyContent: "center",
                marginTop: -8,
                alignItems: "center",
                backgroundColor: "#5C3EBC",
                width: 55,
                height: 55,
              }}
            >
                <Entypo name="list" size={32} color="#ffd00c" />
            </TouchableOpacity>
        )
    }

  return (
    <Tab.Navigator
    initialRouteName='Ana Sayfa'
    screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
        <Tab.Screen
          name="AnaSayfa"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Arama"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sat"
          component={HomeNavigator}
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Kullanıcı"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Hediye"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="gift" size={24} color={color} />
            ),
          }}
        />

    </Tab.Navigator>
  )
}

export default RootNavigator


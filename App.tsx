import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import * as Linking from 'expo-linking';


const prefix = Linking.createURL('/')
const universal = Linking.createURL('http://getir.example.com')

export default function App() {
  const linking= {
    prefixes:[prefix,universal],
    config: {
      screens: {
        Search: {
          screens:{
            CartScreen:{
            path:"cartScreen",
            }
          }
        }
      }
    }
  }
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

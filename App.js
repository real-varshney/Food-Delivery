import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-url-polyfill/auto';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import RestaurantScreen from './screen/RestaurantScreen';
import { store } from './store'
import { Provider } from 'react-redux'
import BasketScreen from './screen/BasketScreen';
import PreparingOrderScreen from './screen/PreparingOrderScreen';
import DeliveryScreen from './screen/DeliveryScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="delivery" component={DeliveryScreen} options={{
          presentation: 'fullScreenModal', headerShown: false, animation: 'slide_from_bottom' 
        }}/>
        <Stack.Screen name="prepare" component={PreparingOrderScreen}  options={{
          presentation: 'fullScreenModal', headerShown: false, animation: "slide_from_bottom" 
        }}/>
        <Stack.Screen name="basket" component={BasketScreen} options={{
          presentation: 'fullScreenModal', headerShown: false, animation: "slide_from_bottom" 
        }}/>
        <Stack.Screen name="restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from "./screen/Categories";
import Category from "./screen/Category";



const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="asdasd" component={Categories}
          options={{
            title: 'Awesome app',
          }}
        />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





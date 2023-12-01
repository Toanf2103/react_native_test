
import {Button, Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1'
import Screen2 from './Screen2'


const Stack = createNativeStackNavigator();
export default function Categories({ navigation }) {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screen1">
        <Stack.Screen name="screen1" component={Screen1}
          options={{
            title: 'screen1',
          }}
        />
        <Stack.Screen name="screen2" component={Screen2}
          options={{
            title: 'screen2',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


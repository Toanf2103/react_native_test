
import {Button, Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Screen2({ navigation }) {
 
  return (
    <View>
        <Text>test 1</Text>
        <Button
        title="test 1"
        onPress={() => navigation.navigate('screen1')}
      />
    </View>
  );
}


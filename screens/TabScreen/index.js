import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Tab = createBottomTabNavigator();
export default function TabScreen({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{ title: "Tab 1", headerShown: false }}
      />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
    </Tab.Navigator>
  );
}

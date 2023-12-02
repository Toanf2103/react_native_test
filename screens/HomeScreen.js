// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Switch tab"
        onPress={() => navigation.navigate('Tab')}
      />
      <Button
        title="Switch Cart"
        onPress={() => navigation.navigate('Cart')}
      />
      <Button
        title="Switch Categories"
        onPress={() => navigation.navigate('Categories')}
      />
    </View>
  );
};

export default HomeScreen;

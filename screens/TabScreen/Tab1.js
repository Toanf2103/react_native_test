// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function  Tab1({ navigation }) {
  return (
    <View>
      <Text>Tab1</Text>
      <Button
        title="Go to Categories"
        onPress={() => navigation.navigate('Categories')}
      />

    </View>
  );
};


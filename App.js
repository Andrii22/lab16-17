import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/mainScreen';
import ValueScreen from './screens/valueScreen';
import Constants from 'expo-constants';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Курси валют на сьогодні' }}
        />
        <Stack.Screen
          name="Value"
          component={ValueScreen}
          options={({ route }) => ({
            title: `Курс ${route.params.name} на тиждень`,
            curse: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  
});

export default App;

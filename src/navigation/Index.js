import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Country from '../screens/Assignment3/Country';
import CountryDetails from '../screens/Assignment3/CountryDetails';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Country"
        screenOptions={{headerShown: false}}>
        {/* FOR ASSIGNMENT 3 */}
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
        {/* FOR ASSIGNMENT 3 */}

        {/* FOR ASSIGNMENT 5 */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        {/* FOR ASSIGNMENT 5 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});

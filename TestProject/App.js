// import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Results from './components/Results';
import Navbar from './components/Navbar';

const Stack = createStackNavigator();
const imageURL = {
  uri:
    'https://image.freepik.com/free-vector/elegant-white-texture-background_23-2148431731.jpg',
};

const App = () => {
  return (
    <NavigationContainer>
      <Navbar title="eBuddy" />

      <Stack.Navigator>
        {/* HOME PAGE */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Search'}}
        />
        {/* RESULTS PAGE */}
        <Stack.Screen
          name="Results"
          component={Results}
          options={{title: 'Results'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 30,
  },
});

export default App;

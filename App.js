// In App.js in a new project

import * as React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './Components/MyTabs';
const Stack = createNativeStackNavigator();

function App() {


 
  return (
   
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MyTabs' >
          <Stack.Screen  options={{headerShown:false}} name="MyTabs"  component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color of the app
  },
});

export default App;
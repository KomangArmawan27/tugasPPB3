import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileInstagram from './ProfileInstagram';

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
      <Button
        title="Ke profil"
        onPress={() => navigation.navigate('ProfileInstagram')}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Profile} />
        <Stack.Screen name="ProfileInstagram" component={ProfileInstagram} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
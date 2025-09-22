import './global.css';
import "./assets/mail.png"
import { View } from 'react-native';
import LoginPage from 'pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Home" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
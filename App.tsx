import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './utils/types';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
	const [loggedIn, setLoggedIn] = React.useState(false);

	React.useEffect(() => {
    //check async storage for token beforehand
    //and set state to true if so
    //otherwise do nothing
  }, []);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{loggedIn ? (
					<Stack.Screen name="Home" component={HomeScreen} />
				) : (
					<Stack.Screen name="Login">
            {props => <LoginScreen {...props} setLoggedIn={setLoggedIn} />}
          </Stack.Screen>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

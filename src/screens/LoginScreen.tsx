import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, Button, Text } from 'react-native';
import type { RootStackParamList } from '../../utils/types';

type LoginScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, 'Login'>;
	setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginScreen({ navigation, setLoggedIn }: LoginScreenProps) {
	return (
		<View style={styles.container}>
			<Text>LoginScreen</Text>
			<Button title="Fake Login" onPress={() => setLoggedIn(true)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

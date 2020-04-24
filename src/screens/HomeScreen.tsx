import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, Button, Text } from 'react-native';
import type { RootStackParamList } from '../../utils/types';

type HomeScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
	return (
		<View style={styles.container}>
			<Text>HomeScreen</Text>
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

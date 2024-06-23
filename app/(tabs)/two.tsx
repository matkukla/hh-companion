import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChoreSelection from '@/app/ChoreSelection';
import ChecklistScreen from '@/app/ChecklistScreen';
import { Text, View } from '@/components/Themed';

const Stack = createStackNavigator();

export default function TabTwoScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ChoreSelection} />
      <Stack.Screen name="Checklist" component={ChecklistScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

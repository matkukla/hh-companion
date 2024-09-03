import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StyledButton } from '../components/StyledButton'; // Assuming you have this component
import { useRouter } from 'expo-router';

export default function MainMenu() {
  const router = useRouter();  // Correctly use the useRouter hook

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/SPO_Logo.png')} // Replace with your logo path
        style={styles.logo}
      />
      <StyledButton
        title="Shopping List"
        onPress={() => router.push('/ShoppingList')}  // Correctly navigate using router.push
      />
      <StyledButton
        title="Chores"
        onPress={() => router.push('/Chores')}
      />
      <StyledButton
        title="Budget"
        onPress={() => router.push('/Budget')}
      />
      <StyledButton
        title="Contact List"
        onPress={() => router.push('/ContactList')}
      />
      <StyledButton
        title="Schedule"
        onPress={() => router.push('/Schedule')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 350,
    height: 150,
    marginBottom: 40,
  },
});

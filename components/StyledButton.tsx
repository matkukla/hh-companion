import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const StyledButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f04763',
    paddingVertical: 10,
    paddingHorizontal: 30, // Increase horizontal padding
    borderRadius: 30, // Increase borderRadius to make it oval
    borderWidth: 0,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Sofia',
  },
});
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
    backgroundColor: '#04063e',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 0,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 17.5,
    fontFamily: 'helvetica',
    fontWeight: '600',
    fontStyle: 'normal',
  },
});
import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StyledButton } from '@/components/StyledButton';

export default function ChoreSelection({ navigation }) {
  const navigateToChecklist = (room) => {
    const chores = {
      'Living Room': [
        { id: '1', task: 'Sweep the floor', completed: false },
        { id: '2', task: 'Dust the shelves', completed: false },
        { id: '3', task: 'Take out the trash', completed: false },
      ],
      Kitchen: [
        { id: '1', task: 'Wash the dishes', completed: false },
        { id: '2', task: 'Clean the countertops', completed: false },
        { id: '3', task: 'Mop the floor', completed: false },
      ],
      Bedroom: [
        { id: '1', task: 'Make the bed', completed: false },
        { id: '2', task: 'Organize the closet', completed: false },
        { id: '3', task: 'Dust the furniture', completed: false },
      ],
      Bathroom: [
        { id: '1', task: 'Clean the sink', completed: false },
        { id: '2', task: 'Scrub the shower', completed: false },
        { id: '3', task: 'Mop the floor', completed: false },
      ],
    };

    navigation.navigate('Checklist', { room, chores: chores[room] });
  };

  return (
    <View style={styles.container}>
      {['Living Room', 'Kitchen', 'Bedroom', 'Bathroom'].map((room, index) => (
        <StyledButton key={index} title={room} onPress={() => navigateToChecklist(room)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
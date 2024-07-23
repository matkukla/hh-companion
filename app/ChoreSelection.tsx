import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const rooms = [
    { name: 'Main Floor', chores: [
        { id: '1', task: 'Sweep the floor', completed: false },
        { id: '2', task: 'Dust the rug', completed: false },
        { id: '3', task: 'Vacuum rug in living room', completed: false },
      ] 
    },
    { name: 'Kitchen', chores: [
        { id: '1', task: 'Wash the dishes', completed: false },
        { id: '2', task: 'Clean the countertops', completed: false },
        { id: '3', task: 'Mop the floor', completed: false },
      ]
    },
    { name: 'Upstairs', chores: [
        { id: '1', task: 'Sweep upstairs', completed: false },
        { id: '2', task: 'Sweep and mop upstairs bathroom', completed: false },
        { id: '3', task: 'Dust the furniture', completed: false },
      ]
    },
    { name: 'Basement', chores: [
        { id: '1', task: 'Remove clutter', completed: false },
        { id: '2', task: 'Sweep the floor', completed: false },
        { id: '3', task: 'etc', completed: false },
      ]
    },
  ];

export default function ChoreSelection({ navigation }) {
    return (
        <View style={styles.container}>
          {rooms.map((room, index) => (
            <Button
              key={index}
              title={room.name}
              onPress={() => navigation.navigate('Checklist', { room: room.name, chores: room.chores })}
            />
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
// bugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  null, // Simulate inconsistent data
  { id: 4, title: 'Item 4' },
];

const MyComponent = () => {
  const renderItem = ({ item }) => {
    if (item) { // Check for null values
      return (
        <View style={{ padding: 10 }}>
          <Text>{item.title}</Text>
        </View>
      );
    } else {
      return null; // Handle null values appropriately
    }
  };

  return (
    <FlatList
      data={data.filter(item => item !== null)} //Filter out null values
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyComponent; 

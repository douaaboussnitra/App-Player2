import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListTraining = () => {
  return (
    <View style={styles.container}>
      <Text>Centered ListTraining</Text>
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

export default ListTraining;

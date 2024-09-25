import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OneTraining = () => {
  return (
    <View style={styles.container}>
      <Text>Centered OneTraining</Text>
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

export default OneTraining;

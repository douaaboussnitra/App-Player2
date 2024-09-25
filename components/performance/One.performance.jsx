import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OnePerformance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User OnePerformance</Text>
      {/* Add your OnePerformance details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default OnePerformance;

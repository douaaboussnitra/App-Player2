import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OnePhysical = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User OnePhysical</Text>
      {/* Add your OnePhysical details here */}
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

export default OnePhysical;

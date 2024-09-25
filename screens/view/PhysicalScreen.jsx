import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListPhysical from '../../components/physical/List.physical';

const PhysicalScreen = () => {
  return (
    <View style={styles.container}>
      <ListPhysical />
      {/* Additional content specific to the PhysicalScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default PhysicalScreen;

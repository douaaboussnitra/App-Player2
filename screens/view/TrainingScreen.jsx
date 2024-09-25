import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListTraining from '../../components/training/List.training';

const TrainingScreen = () => {

  return (
    <View style={styles.container}>
      <ListTraining />
      {/* Additional content specific to the ProfileScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default TrainingScreen;


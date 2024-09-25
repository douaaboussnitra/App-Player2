import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListAnalysis from '../../components/analysis/List.analysis';

const AnalysiScreen = () => {
  return (
    <View style={styles.container}>
      <ListAnalysis />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default AnalysiScreen;

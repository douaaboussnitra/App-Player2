import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListPerformance from '../../components/performance/List.performance';

const PerformanceScreen = () => {
  return (
    <View style={styles.container}>
      <ListPerformance />
      {/* Additional content specific to the PerformanceScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default PerformanceScreen;

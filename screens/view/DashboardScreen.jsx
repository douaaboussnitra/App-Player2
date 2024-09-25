import React from 'react';
import { View, StyleSheet } from 'react-native';
import IndexDashboard from '../../components/dashboard/Index.dashboard';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <IndexDashboard />
      {/* Additional content specific to the DashboardScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default DashboardScreen;

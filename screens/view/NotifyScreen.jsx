import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListNotify from '../../components/notify/List.notify';

const NotifyScreen = () => {
  return (
    <View style={styles.container}>
      <ListNotify />
      {/* Additional content specific to the NotifyScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default NotifyScreen;

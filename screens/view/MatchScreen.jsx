import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListMatch from '../../components/match/List.match';

const MatchScreen = () => {
  return (
    <View style={styles.container}>
      <ListMatch />
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

export default MatchScreen;


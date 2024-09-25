import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListProfile from '../../components/profile/List.profile';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ListProfile />
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

export default ProfileScreen;

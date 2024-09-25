import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormTraining = () => {
  return (
    <View style={styles.container}>
      <Text>Centered FormTraining</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormTraining;

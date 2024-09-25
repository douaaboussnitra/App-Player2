import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getFullHeight } from '../utils/DimensionsUtil';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const NoData = ({ message, style }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="database-remove-outline" size={style?.size ?? 24} color={style?.color ?? "black"} />
      <Text style={[
        styles.message, { color: style?.color, fontSize: style?.size }
      ]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    height: getFullHeight() / 1.2,
  },
  message: {
    fontSize: 18,
    marginTop: 4,
    textAlign: 'center',
    color: '#333',
  },
});

export default NoData;

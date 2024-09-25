import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomIcons from '../../shared/CustomIcons';
import Colors from '../../../constants/Colors';




const NoPlayerBlockDashboard = ({ score }) => {
  return (
    <View style={[styles.scoreHeadBlock]}>
      <View style={[styles.scoreHeadNoPlayer]}  >
        <CustomIcons type={"FontAwesome5"} style={[styles.scorePlayerIcon]} name="trophy" size={14} color="#e5e5e59e" />
        <Text style={[styles.scoreHeadNoPlayerLabel]} >{score}</Text>
      </View>
    </View>
  );
};

export default NoPlayerBlockDashboard;

const styles = StyleSheet.create({
  scorePlayerIcon: {
    zIndex: 2,
    marginRight: 10
  },
  scoreHeadNoPlayerLabel: {
    color: '#fff',
    fontSize: 20
  },
  scoreHeadNoPlayer: {
    backgroundColor: Colors.active,
    height: '60%',
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  scoreHeadBlock: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RandomImageSource from '../../shared/RandomImageSource';
import CustomIcons from '../../shared/CustomIcons';
import Colors from '../../../constants/Colors';




const PlayerBlockDashboard = ({ firstname, lastname, image, color }) => {
  return (
    <View style={[styles.scoreHeadBlock]}>
      <CustomIcons type={"FontAwesome5"} style={[styles.scorePlayerIcon]} name="trophy" size={14} color={color ?? '#e2af60'} />
      <View style={[styles.scorePlayerImageBlock]}>
        <Image source={RandomImageSource(image)} style={[styles.scorePlayerImage]} />
      </View>
      <View>
        <Text style={[styles.scorePlayerName, { fontWeight: 'bold' }]}>{lastname}</Text>
        <Text style={[styles.scorePlayerName]}>{firstname}</Text>
      </View>
    </View>
  );
};

export default PlayerBlockDashboard;

const styles = StyleSheet.create({
  scorePlayerIcon: {
    position: 'absolute',
    zIndex: 2,
    left: 12
  },
  scoreHeadTopLabel: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  scoreHeadTopBlock: {
    backgroundColor: '#e5e5e524',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  scorePlayerName: {
    fontSize: 14,
    color: Colors.active
  },
  scorePlayerImageBlock: {
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 70,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.active,
    padding: 2
  },
  scorePlayerImage: {
    width: '100%',
    height: '100%',
  },
  scoreHeadBlock: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
});
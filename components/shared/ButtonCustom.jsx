import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import CustomIcons from './CustomIcons';

const ButtonCustom = ({ title, onPress, color, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = [
    styles.button,
    { backgroundColor: isHovered ? color?.yes : color?.not },
    { borderColor: isHovered ? color?.not : color?.yes },
  ];
  const textStyles = { color: isHovered ? color?.not : color?.yes };

  return (
    <TouchableOpacity
      style={[buttonStyles, styles.shadow]}
      onPress={onPress}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CustomIcons type={icon?.type} style={styles.buttonIcon} name={icon?.name} size={icon?.size} color={icon?.color} />
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonIcon: {
    marginRight: 10
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonCustom;

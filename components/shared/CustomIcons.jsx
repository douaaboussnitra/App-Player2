import React from 'react';
import { Ionicons, AntDesign, EvilIcons, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Feather, Entypo, Fontisto, Octicons, SimpleLineIcons } from "@expo/vector-icons";

const CustomIcons = ({ name, size, color, type, ...props }) => {
  switch (type) {
    case 'Ionicons':
      return <Ionicons name={name} size={size} color={color} {...props} />;
    case 'AntDesign':
      return <AntDesign name={name} size={size} color={color} {...props} />;
    case 'EvilIcons':
      return <EvilIcons name={name} size={size} color={color} {...props} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons name={name} size={size} color={color} {...props} />;
    case 'FontAwesome':
      return <FontAwesome name={name} size={size} color={color} {...props} />;
    case 'FontAwesome5':
      return <FontAwesome5 name={name} size={size} color={color} {...props} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={size} color={color} {...props} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} {...props} />;
    case 'Feather':
      return <Feather name={name} size={size} color={color} {...props} />;
    case 'Entypo':
      return <Entypo name={name} size={size} color={color} {...props} />;
    case 'Fontisto':
      return <Fontisto name={name} size={size} color={color} {...props} />;
    case 'Octicons':
      return <Octicons name={name} size={size} color={color} {...props} />;
    default:
      return null; // Return null or a default icon if needed
  }
};

export default CustomIcons;

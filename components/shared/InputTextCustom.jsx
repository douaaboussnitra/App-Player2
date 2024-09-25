import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CustomIcons from './CustomIcons';
const InputTextCustom = ({ placeholder, onChangeText, value, label, icon, field, input, iconExpo }) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={[styles.fieldContainer, field]} >
      <Text style={[styles.labelContainer, label?.style]}  >{label.text ?? ""} </Text>
      <View style={[styles.inputContainer]} >
        <CustomIcons type={iconExpo?.type} style={[styles.inputIcon, { color: iconExpo?.color }]} name={iconExpo?.name} size={iconExpo?.size} />
        <TextInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={onChangeText}
          value={value}
          multiline
          placeholder={placeholder ?? ""}
          style={[styles.input, input]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    fontSize: 15,
    color: '#2986CC',
    paddingBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    top: 12,
    color: '#2986CC',
  },
  inputContainer: {
  },
  fieldContainer: {
    position: 'relative',
    width: "100%",
    marginVertical: 0,
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 20,
    textAlignVertical: 'top', // Aligns the text at the top of the input
    height: 50,
    paddingLeft: 50,
    width: '100%',
    paddingTop: 10,
  },
});

export default InputTextCustom;

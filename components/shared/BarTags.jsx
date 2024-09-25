import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import CustomIcons from './CustomIcons';

const BarTags = ({ items, primaryColor, secondaryColor, focus, setFocused }) => {
  return (
    <View style={[styles.container, { backgroundColor: primaryColor }]} >
      <ScrollView horizontal={true} style={styles.containerChildren}  >
        {
          Array(...items).map((el, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => setFocused(el.key)} style={[styles.children, focus == el.key ? { backgroundColor: secondaryColor, ...styles.shadow } : { backgroundColor: primaryColor }]}  >
                <View style={styles.text} >
                  <CustomIcons name={el.icon.name} style={{ color: 'white' }} size={el.icon.size} type={el.icon.type} />
                  <Text style={styles.label}>{el.label}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '99%',
    paddingHorizontal: 8,
    margin: 10,
    borderRadius: 6,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: 'white',
  },
  label: {
    color: 'white',
    marginLeft: 10
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  children: {
    marginHorizontal: 6,
    paddingHorizontal: 8,
    padding: 4,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    marginVertical: 6,

  },
  containerChildren: {
    flexDirection: 'row',
  }
})

export default BarTags;
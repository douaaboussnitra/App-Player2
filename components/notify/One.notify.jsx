import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RandomImageSource from '../shared/RandomImageSource';
import CustomIcons from '../shared/CustomIcons';

const OneNotify = ({ name, color, created_at, content, image, onUpdate, onDestroy }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainerShadow}>
        <View style={styles.cardContainer}>
          <View style={[styles.header, { backgroundColor: color ?? 'black' }]}>
            <View style={styles.profileImage}>
              <Image
                style={styles.image}
                source={RandomImageSource(image ?? 2)}
              />
            </View>
            <View>
              <Text style={styles.name}>{name ?? ""}</Text>
              <Text style={styles.date}>{created_at ?? ""}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text>{content}</Text>
          </View>
          <View style={[styles.icons, { backgroundColor: color }]}>
            <CustomIcons onPress={onUpdate} type="MaterialCommunityIcons" style={styles?.icon} name="clipboard-edit-outline" size={24} />
            <CustomIcons onPress={onDestroy} type="MaterialCommunityIcons" style={styles?.icon} name="delete-outline" size={24} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default OneNotify;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  cardContainerShadow: {
    shadowColor: '#D7DBE2',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    shadowOpacity: 1,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 2,
    overflow: 'hidden'
  },
  header: {
    width: '100%',
    backgroundColor: '#497094',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    padding: 1,
    marginRight: 10
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  content: {
    width: '100%',
    backgroundColor: '#ECF0F4',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  icons: {
    width: '100%',
    backgroundColor: '#497094',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  icon: {
    color: '#fff',
  },
});



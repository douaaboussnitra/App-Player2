import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, Text, KeyboardAvoidingView, TouchableNativeFeedback, ScrollView, SafeAreaView } from 'react-native';
import InputTextCustom from '../shared/InputTextCustom';
import ButtonCustom from '../shared/ButtonCustom';
import RandomImageSource from '../shared/RandomImageSource';
import moment from 'moment';
import CustomIcons from '../shared/CustomIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { generateRandomHashKey, retrieveData, storeData } from '../utils/utils';
import Colors from '../../constants/Colors';
//
const FormProfile = () => {
  const [form, setForm] = useState({
    firstname: null,
    lastname: null,
    age: null,
    country: null,
    address: null
  })
  const route = useRoute();
  const player = route?.params?.player ?? false;
  const [indexImage, setIndexImage] = useState(1);
  const navigator = useNavigation();
  const handleAction = async (type) => {
    switch (type) {
      case "update":
        var players = await retrieveData("players");
        var item_player = players.map(p => {
          if (p.id == player?.id) {
            return Object({
              ...p,
              ...form
            })
          }
          return p
        });
        await storeData("players", item_player);
        handleAction('return')
        break
      case "save":
        var players = await retrieveData("players");
        let id = generateRandomHashKey(10);
        var item_player = { id, ...form, image: indexImage, created_at: { date: moment().format('DD-MM-YYYY'), hour: moment().format('HH:mm') } };
        if (player) {
          players = Array(...players).reverse().map((ms, i) => i === player?.index ? item_player : ms);
        } else {
          players.push(item_player)
        }
        await storeData("players", players);
        handleAction('return')
        break;
      case "return":
        navigator.navigate('Player')
        break;
      case "image":
        var index = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        setIndexImage(index)
        break;

      default:
        break;
    }
  }
  useEffect(() => {
    handleAction('image')
    if (player) {
      setIndexImage(player?.image)
      setForm({
        firstname: player?.firstname,
        lastname: player?.lastname,
        age: player?.age,
        country: player?.country,
        address: player?.address
      })
    }
  }, [])


  return (

    <KeyboardAvoidingView
      style={styles.container} enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.containerImage}>
            <View style={styles.ImageBlock}>
              <Image
                style={styles.image}
                source={RandomImageSource(indexImage)}
              />
              <TouchableOpacity style={styles.imageChange} onPress={() => handleAction('image')} >
                <CustomIcons type="Octicons" style={[{ color: "black" }]} name="image" size={24} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Inputs  */}
          <InputTextCustom
            placeholder="votre nom ..."
            iconExpo={{
              type: "FontAwesome",
              name: "user-circle-o",
              size: 24,
              color: Colors.primary
            }}
            value={form.firstname}
            onChangeText={(val) => setForm({ ...form, firstname: val })}
            label={{
              text: "Nom",
              style: { color: Colors.primary }
            }}
            input={{
              borderColor: Colors.primary,
              color: Colors.primary
            }}
            icon={{
              color: Colors.primary,
              size: 10
            }}
          />

          <InputTextCustom
            placeholder="votre prénom ..."
            iconExpo={{
              type: "FontAwesome",
              name: "user-circle-o",
              size: 24,
              color: Colors.primary
            }}
            value={form.lastname}
            onChangeText={(val) => setForm({ ...form, lastname: val })}
            label={{
              text: "Prénom",
              style: { color: Colors.primary }
            }}
            input={{
              borderColor: Colors.primary,
              color: Colors.primary
            }}
            icon={{
              color: Colors.primary,
              size: 10
            }}
          />

          <InputTextCustom
            placeholder="votre âge ..."
            iconExpo={{
              type: "FontAwesome",
              name: "user",
              size: 24,
              color: Colors.primary
            }}
            value={form.age}
            onChangeText={(val) => setForm({ ...form, age: val })}
            label={{
              text: "Âge",
              style: { color: Colors.primary }
            }}
            input={{
              borderColor: Colors.primary,
              color: Colors.primary
            }}
            icon={{
              color: Colors.primary,
              size: 10
            }}
          />

          <InputTextCustom
            placeholder="votre pays ..."
            iconExpo={{
              type: "Fontisto",
              name: "world-o",
              size: 24,
              color: Colors.primary
            }}
            value={form.country}
            onChangeText={(val) => setForm({ ...form, country: val })}
            label={{
              text: "Pays",
              style: { color: Colors.primary }
            }}
            input={{
              borderColor: Colors.primary,
              color: Colors.primary
            }}
            icon={{
              color: Colors.primary,
              size: 10
            }}
          />

          <InputTextCustom
            placeholder="votre adress ..."
            label={{
              text: "Adresse",
              style: { color: Colors.primary }
            }}
            value={form.address}
            onChangeText={(val) => setForm({ ...form, address: val })}
            input={{
              borderColor: Colors.primary,
              color: Colors.primary
            }}
            icon={{
              color: Colors.primary,
              size: 10
            }}
            iconExpo={{
              type: "FontAwesome",
              name: "address-book",
              size: 24,
              color: Colors.primary
            }}
          />

          {/* Save  */}
          <View style={styles.buttonsContainer} >
            <ButtonCustom onPress={() => handleAction('return')} icon={Object({
              type: "MaterialIcons",
              name: "assignment-return",
              size: 24,
              color: "white"
            })} title={"Annule"} color={Object({ yes: 'white', not: '#BCBCBC' })} />
            <ButtonCustom onPress={() => (player?.id ? handleAction('update') : handleAction('save'))} icon={Object({
              type: "Feather",
              name: "save",
              size: 24,
              color: "white"
            })} title={"Save"} color={Object({ yes: 'white', not: Colors.primary })} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  ImageBlock: {
    position: 'relative'
  },
  imageChange: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: -2,
    bottom: -2,
    borderColor: Colors.primary,
    borderWidth: 3

  },
  buttonsContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
    // alignItems: 'center'
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 8,
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderColor: Colors.primary,
    borderWidth: 4,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden', // Ensure the image stays within the circle
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  text: {
    fontSize: 42,
  },
});

export default FormProfile;

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { storeData, retrieveData } from '../../components/utils/utils';
import moment from 'moment';
import { useNavigation, useRoute } from '@react-navigation/native';
import DropdownCustom from '../shared/DropdownCustom';
import RandomImageSource from '../shared/RandomImageSource';
import ButtonCustom from '../shared/ButtonCustom';
import Colors from '../../constants/Colors';
const FormNotify = () => {
  const [form, setForm] = useState({
    message: null,
    type: 'notify',
    player: null
  });
  const navigator = useNavigation()
  const [loading, setLoading] = useState([]);
  const [players, setPlayers] = useState([]);
  const route = useRoute();
  const request = route?.params?.request ?? false;
  useEffect(() => {
    navigator.addListener('focus', async () => {
      setLoading(true);
      await handleActions('PLAYERS')
      if (request) {
        setForm(request)
      } else {
        setForm({
          message: null,
          type: 'notify',
          player: null
        })
      }
    })
  }, [])

  const handleActions = async (type) => {
    switch (type) {
      case 'RETURN':
        navigator.navigate('Notify')
        break
      case 'PLAYERS':
        var players_ = await retrieveData("players");
        setPlayers(Array(...players_).reverse().map((player, index) => Object({
          label: `${player?.firstname.toUpperCase()} ${player?.lastname.toLowerCase()}`,
          value: player.id,
          image: RandomImageSource(player?.image ?? 1)
        })));
        setLoading(false);
        break
      case 'SAVE':
        var messages = await retrieveData("message"), item_message = { ...form, created_at: { date: moment().format('DD-MM-YYYY'), hour: moment().format('HH:mm') } };
        if (request) {
          messages = Array(...messages).reverse().map((ms, i) => i === request?.index ? item_message : ms);
        } else {
          messages.push(item_message)
        }
        await storeData("message", messages);
        setLoading(false);
        handleActions('RETURN')
        break;

      default:
        break;
    }
  };
  return loading ? <ActivityIndicator size="small" color={Colors.primary} /> : (
    <KeyboardAvoidingView
      style={styles.container} enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView style={{ height: "100%" }}>
        <ScrollView contentContainerStyle={{ height: "100%", justifyContent: 'space-between' }}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle} > <MaterialCommunityIcons name={form.type === 'notify' ? "bell" : "android-messages"} size={20} color="black" /> {form.type === 'notify' ? 'Notifications' : 'Messages'}</Text>
          </View>

          <DropdownCustom
            dropdown={Object({ borderColor: Colors.primary })}
            data={players}
            value={form.player}
            setValue={(player) => setForm({ ...form, player })}
            placeholder={'Search player'}
            label={'Player'}
          />
          <TextInput
            style={styles.input}
            placeholder={form.type == 'message' ? "Messages" : 'Notifications'}
            onChangeText={(message) => setForm({ ...form, message })}
            value={form.message}
            multiline
          />
          <View style={styles.containerSwitch}>
            <TouchableOpacity onPress={() => setForm({ ...form, type: 'notify' })} ><Text style={[styles.typeSwitch, form.type == 'notify' && { backgroundColor: Colors.primary, color: 'white' }]} >Notifications</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm({ ...form, type: 'message' })} ><Text style={[styles.typeSwitch, form.type == 'message' && { backgroundColor: Colors.primary, color: 'white' }]} >Messages</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer} >
            <ButtonCustom onPress={() => handleActions('RETURN')} icon={Object({
              type: "MaterialIcons",
              name: "assignment-return",
              size: 24,
              color: "white"
            })} title={"Annule"} color={Object({ yes: 'white', not: '#BCBCBC' })} />
            <ButtonCustom onPress={() => handleActions('SAVE')} icon={Object({
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
  buttonsContainer: {
    justifyContent: 'space-evenly',
  },
  typeSwitch: {
    backgroundColor: 'white', color: Colors.primary, borderRadius: 6, paddingVertical: 10, borderColor: '#497094', paddingHorizontal: 20, borderWidth: 2, borderRadius: 4,
    overflow: 'hidden'
  },
  containerSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white', // White background
    padding: 16,
  },
  sectionTitleContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', // Black text color
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    borderWidth: 2,
    marginTop: 20,
    borderColor: Colors.primary,
    borderRadius: 5,
    padding: 20,
    paddingTop: 20,
    fontSize: 20,
    textAlignVertical: 'top', // Aligns the text at the top of the input
    minHeight: 250, // Set a minimum height for the textarea
  },
});

export default FormNotify;


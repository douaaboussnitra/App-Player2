import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import DropdownCustom from '../shared/DropdownCustom';
import { retrieveData, storeData } from '../utils/utils';
import RandomImageSource from '../shared/RandomImageSource';
import InputTextCustom from '../shared/InputTextCustom';
import ButtonCustom from '../shared/ButtonCustom';
import moment from 'moment';
import { useNavigation, useRoute } from '@react-navigation/native';
import Colors from '../../constants/Colors';

const FormPhysical = () => {
  const navigator = useNavigation()
  const [form, setForm] = useState({
    player: null,
    width: null,
    height: null,
    mg_impedance: null,
    mg: null,
    mg_plus: null,
    mg_gl: null,
  })
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const route = useRoute();
  const physical = route?.params?.physical ?? false;
  useEffect(() => {
    navigator.addListener('focus', () => {
      handleAction('PLAYERS')
    })
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  const handleAction = async (type) => {
    switch (type) {
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
        var physical_ = await retrieveData("physical");
        var item_physical = { ...form, created_at: { date: moment().format('DD-MM-YYYY'), hour: moment().format('HH:mm') } };
        if (physical) {
          physical_ = Array(...physical_).reverse().map((ms, i) => i === physical?.index ? item_physical : ms);
        } else {
          physical_.push(item_physical)
        }
        await storeData("physical", physical_);
        handleAction('RETURN')
        break;
      case 'RETURN':
        navigator.navigate('Physical')
        break;

      default:
        break;
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.container} enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView style={{ height: "100%" }}>
        <ScrollView contentContainerStyle={{ height: "100%", justifyContent: 'space-between' }}>
          <DropdownCustom
            dropdown={Object({ borderColor: Colors.primary })}
            data={players}
            value={form.player}
            setValue={(val) => setForm({ ...form, player: val })}
            placeholder={'Search player'}
            label={'Player'}

          />
          <View style={styles.inputsRows} >
            <InputTextCustom
              placeholder="0"
              iconExpo={{
                type: "FontAwesome",
                name: "user-circle-o",
                size: 24,
                color: Colors.primary
              }}
              value={form.width}
              onChangeText={(val) => setForm({ ...form, width: val })}
              label={{
                text: "Poids",
                style: { color: Colors.primary, fontSize: 12 }
              }}
              input={{
                borderColor: Colors.primary,
                color: Colors.primary,
              }}
              field={{
                width: '45%'
              }}
              icon={{
                color: Colors.primary,
                size: 10
              }}
            />
            <InputTextCustom
              placeholder="0"
              iconExpo={{
                type: "MaterialCommunityIcons",
                name: "human-male-height",
                size: 24,
                color: Colors.primary
              }}
              value={form.height}
              onChangeText={(val) => setForm({ ...form, height: val })}
              label={{
                text: "Taille",
                style: { color: Colors.primary, fontSize: 12 }
              }}
              field={{
                width: '45%'
              }}
              input={{
                borderColor: Colors.primary,
                color: Colors.primary,
              }}
              icon={{
                color: Colors.primary,
                size: 10
              }}
            />
          </View>
          <View style={styles.inputsRows} >
            <InputTextCustom
              placeholder="0"
              iconExpo={{
                type: "AntDesign",
                name: "tagso",
                size: 24,
                color: Colors.primary
              }}
              value={form.mg_impedance}
              onChangeText={(val) => setForm({ ...form, mg_impedance: val })}
              label={{
                text: "% MG impédance mètrie",
                style: { color: Colors.primary, fontSize: 12 }
              }}
              input={{
                borderColor: Colors.primary,
                color: Colors.primary,
              }}
              field={{
                width: '45%'
              }}
              icon={{
                color: Colors.primary,
                size: 10
              }}
            />
            <InputTextCustom
              placeholder="0"
              iconExpo={{
                type: "AntDesign",
                name: "tagso",
                size: 24,
                color: Colors.primary
              }}
              value={form.mg}
              onChangeText={(val) => setForm({ ...form, mg: val })}
              label={{
                text: "% MG DEXA",
                style: { color: Colors.primary, fontSize: 12 }
              }}
              field={{
                width: '45%'
              }}
              input={{
                borderColor: Colors.primary,
                color: Colors.primary,
              }}
              icon={{
                color: Colors.primary,
                size: 10
              }}
            />
          </View>
          <View style={styles.inputsRows} >

            <InputTextCustom
              placeholder="0"
              iconExpo={{
                type: "AntDesign",
                name: "tagso",
                size: 24,
                color: Colors.primary
              }}
              value={form.mg_plus}
              onChangeText={(val) => setForm({ ...form, mg_plus: val })}
              label={{
                text: "% MG PLIS CUTANÉS",
                style: { color: Colors.primary, fontSize: 12, width: '100%' }
              }}
              input={{
                borderColor: Colors.primary,
                color: Colors.primary,
              }}
              field={{
                width: '45%'
              }}
              icon={{
                color: Colors.primary,
                size: 10
              }}
            />
            <InputTextCustom
              placeholder="0"
              iconExpo={{
                type: "AntDesign",
                name: "tagso",
                size: 24,
                color: Colors.primary
              }}
              value={form.mg_gl}
              onChangeText={(val) => setForm({ ...form, mg_gl: val })}
              label={{
                text: "HG g/dL",
                style: { color: Colors.primary, fontSize: 12 }
              }}
              field={{
                width: '45%'
              }}
              input={{
                borderColor: Colors.primary,
                color: Colors.primary,
              }}
              icon={{
                color: Colors.primary,
                size: 10
              }}
            />
          </View>
          <View style={styles.buttonsContainer} >
            <ButtonCustom onPress={() => handleAction('RETURN')} icon={Object({
              type: "MaterialIcons",
              name: "assignment-return",
              size: 24,
              color: "white"
            })} title={"Annule"} color={Object({ yes: 'white', not: '#BCBCBC' })} />
            <ButtonCustom onPress={() => handleAction('SAVE')} icon={Object({
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
  inputsRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 8,
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    justifyContent: 'space-evenly',
  },
});



export default FormPhysical;

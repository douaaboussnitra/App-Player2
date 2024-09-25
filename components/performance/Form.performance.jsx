import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableNativeFeedback, ScrollView } from 'react-native';
import DropdownCustom from '../shared/DropdownCustom';
import { retrieveData, storeData } from '../utils/utils';
import RandomImageSource from '../shared/RandomImageSource';
import InputTextCustom from '../shared/InputTextCustom';
import ButtonCustom from '../shared/ButtonCustom';
import moment from 'moment';
import { useNavigation, useRoute } from '@react-navigation/native';
import Colors from '../../constants/Colors';

const FormPerformance = () => {
  const navigator = useNavigation()
  const [form, setForm] = useState({
    player: null,
    goals: null,
    assists: null,
    play_time: null,
    red_cards: null,
    yellow_cards: null
  })
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const route = useRoute();
  const performance = route?.params?.performance ?? false;
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
        var performance_ = await retrieveData("performance");
        var item_performance = { ...form, created_at: { date: moment().format('DD-MM-YYYY'), hour: moment().format('HH:mm') } };
        if (!performance) {
          performance_ = Array(...performance_).reverse().map((ms, i) => i === performance?.index ? item_performance : ms);
        } else {
          performance_.push(item_performance)
        }
        await storeData("performance", performance_);
        handleAction('RETURN')
        break;
      case 'RETURN':
        navigator.navigate('Performance')
        break;

      default:
        break;
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.container} enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={{ height: "100%" }}>
        <ScrollView contentContainerStyle={{ height: "100%", justifyContent: 'space-between' }}>

          <View style={styles.container}>
            <DropdownCustom
              dropdown={Object({ borderColor: Colors.primary })}
              data={players}
              value={form.player}
              setValue={(val) => setForm({ ...form, player: val })}
              placeholder={'Search player'}
              label={'Player'}
            />
            <InputTextCustom
              placeholder="Goals."
              iconExpo={{
                type: "FontAwesome",
                name: "soccer-ball-o",
                size: 24,
                color: Colors.primary
              }}
              value={form.goals}
              onChangeText={(val) => setForm({ ...form, goals: val })}
              label={{
                text: "Goals",
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
              placeholder="Assists"
              iconExpo={{
                type: "MaterialCommunityIcons",
                name: "lastpass",
                size: 24,
                color: Colors.primary
              }}
              value={form.assists}
              onChangeText={(val) => setForm({ ...form, assists: val })}
              label={{
                text: "Assists",
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
              placeholder="Play Time."
              iconExpo={{
                type: "MaterialIcons",
                name: "timer",
                size: 24,
                color: Colors.primary
              }}
              value={form.play_time}
              onChangeText={(val) => setForm({ ...form, play_time: val })}
              label={{
                text: "Play Time",
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
            <View style={styles.inputsRows} >

              <InputTextCustom
                placeholder="0"
                iconExpo={{
                  type: "MaterialCommunityIcons",
                  name: "cards",
                  size: 24,
                  color: "#A30000"
                }}
                value={form.red_cards}
                onChangeText={(val) => setForm({ ...form, red_cards: val })}
                label={{
                  text: "Carton red",
                  style: { color: Colors.primary }
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
                  name: "cards",
                  size: 24,
                  color: "#EFB813"
                }}
                value={form.yellow_cards}
                onChangeText={(val) => setForm({ ...form, yellow_cards: val })}
                label={{
                  text: "Carton yellow",
                  style: { color: Colors.primary }
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
          </View>

        </ScrollView>
      </ScrollView>
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

export default FormPerformance;

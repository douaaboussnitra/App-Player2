import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomIcons from '../shared/CustomIcons';
import RandomImageSource from '../shared/RandomImageSource';
import NoData from '../shared/NoData';
import { retrieveData } from '../utils/utils';
import PhysicalStyles from './style/style.physical';
import PHYSICAL from '../../constants/Physical';
import Colors from '../../constants/Colors';

const ListPhysical = () => {
  const navigator = useNavigation();
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const [physical, setPhysical] = useState({
    width: [],
    height: [],
    mg_impedance: [],
    mg: [],
    mg_plus: [],
    mg_gl: []
  })

  useEffect(() => {
    navigator.addListener('focus', () => {
      handelAction('players');
    })
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [])

  handelAction = async (type) => {
    setLoading(true);
    switch (type) {
      case 'players':
        var players_ = await retrieveData("players");
        setPlayers(players_);
        handelAction('physical');
        break;
      case 'physical':
        var physical_ = await retrieveData("physical"),
          physicalObj = {
            width: [],
            height: [],
            mg_impedance: [],
            mg: [],
            mg_plus: [],
            mg_gl: []
          };
        console.log(physical_.length);
        physical_.forEach(pl => {
          const playerId = pl.player;
          const player = players.find(pl => pl.id === playerId)
          if (playerId && player?.id) {
            let { firstname, lastname, image } = player,
              playerInfo = { firstname, lastname, image };
            Object.keys(physicalObj).forEach(
              KEY => {
                var value = Number(pl[KEY]) ?? 0;
                if (value > 0) {
                  var value_physical = [
                    ...new Set([...physical[KEY], { ...playerInfo, value }].map(val => JSON.stringify(val)))
                  ].map(val => JSON.parse(val));
                  setPhysical({
                    ...physical,
                    [KEY]: value_physical
                  });
                  physicalObj[KEY] = value_physical;
                }
              })
          }
        })

        setPhysical(physicalObj);
        setLoading(false);
        break;
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>User ListPerformance</Text> */}
      {
        loading ? <ActivityIndicator size="large" color={Colors.primary} /> : (
          <View style={PhysicalStyles.blockContainer} >
            {
              PHYSICAL.map((elm, i) => {
                return (
                  <View style={PhysicalStyles.block} key={i} >
                    <View style={PhysicalStyles.blockHeader} >
                      <Text style={PhysicalStyles.textHeader} >
                        <CustomIcons style={elm.icon.style ?? null} type={elm.icon.type} name={elm.icon.name} size={elm.icon.size} /> {elm.slug} </Text>
                    </View>
                    <View style={PhysicalStyles.blockBorder} >
                      <View style={PhysicalStyles.blockBody} >
                        {
                          physical[elm.key].length > 0
                            ?
                            <ScrollView>
                              {
                                physical[elm.key].map((elms, index) => {
                                  return (
                                    <PlayerBlock
                                      key={index}
                                      lastname={elms?.firstname}
                                      firstname={elms?.lastname}
                                      image={elms?.image}
                                      value={elms?.value}
                                    />
                                  )
                                })
                              }
                            </ScrollView>
                            :
                            <NoData message={elm.message} style={Object({ color: "#7D583F", size: 16, fontSize: 16 })} />
                        }
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </View>
        )
      }

      <View style={[PhysicalStyles.actionPlusContainer, PhysicalStyles.shadow]}  >
        <TouchableOpacity style={PhysicalStyles.actionPlus} onPress={() => navigator.navigate('FormPhysical')} >
          <MaterialCommunityIcons name="soccer-field" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View >
  );
};

const PlayerBlock = ({ firstname, lastname, image, value }) => {
  return (
    <View style={PhysicalStyles.playerContainer} >
      <View style={PhysicalStyles.playerInfo}  >
        <Image
          style={PhysicalStyles.imageStyle}
          source={RandomImageSource(image)}
        />
        <Text style={PhysicalStyles.fullname} >{lastname} {firstname}</Text>

      </View>
      <View style={PhysicalStyles.playerValue}  >
        <Text>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ListPhysical;



import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator, FlatList } from 'react-native';
import PerformanceStyles from './style/style.performance';
import { useNavigation } from '@react-navigation/native';
import CustomIcons from '../shared/CustomIcons';
import NoData from '../shared/NoData';
import { retrieveData } from '../utils/utils';
import RandomImageSource from '../shared/RandomImageSource';
import PERFORMANCE from '../../constants/Performance';

const ListPerformance = () => {
  const navigator = useNavigation();
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  const [performance, setPerformance] = useState({
    goals: [],
    assists: [],
    play_time: [],
    red_cards: [],
    yellow_cards: []
  })
  useEffect(() => {
    navigator.addListener('focus', () => {
      handelAction('players');
    })
  }, [])
  handelAction = async (type) => {
    setLoading(true);
    switch (type) {
      case 'players':
        var players_ = await retrieveData("players");
        if (!players_) {
          return false
        }
        setPlayers(Array(...players_).reverse());
        handelAction('performance');
        break;
      case 'performance':
        var performance_ = await retrieveData("performance"),
          performanceObj = {
            goals: [],
            assists: [],
            play_time: [],
            red_cards: [],
            yellow_cards: []
          };
        if (!performance_) {
          return false
        }
        for (let i = 0; i < performance_?.length ?? 0; i++) {
          const playerId = performance_[i].player;
          const player = players.find(pl => pl.id === playerId)
          if (playerId && player?.id) {
            let { firstname, lastname, image } = player,
              playerInfo = { firstname, lastname, image };
            Object.keys(performanceObj).forEach(
              KEY => {
                var value = Number(performance_[i][KEY]) ?? 0;
                if (value > 0) {
                  var value_performance = [{ ...playerInfo, value }];
                  setPerformance({
                    ...performance,
                    [KEY]: value_performance
                  });
                  performanceObj[KEY] = value_performance;
                }
              }
            );
          }
        }
        setPerformance(performanceObj);
        setLoading(false);
        break;

      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      {
        loading ? <ActivityIndicator size="small" color="#38761D" />
          : (
            <View style={PerformanceStyles.blockContainer} >
              {
                PERFORMANCE.map((prfm, i) => {
                  return (
                    <View style={PerformanceStyles.block} key={i} >
                      <View style={PerformanceStyles.blockHeader} >
                        <Text style={PerformanceStyles.textHeader} >
                          <CustomIcons style={prfm.icon.style ?? null} type={prfm.icon.type} name={prfm.icon.name} size={prfm.icon.size} /> {prfm.slug} </Text>
                      </View>
                      <View style={PerformanceStyles.blockBorder} >
                        <View style={PerformanceStyles.blockBody} >
                          {
                            performance[prfm.key].length > 0
                              ?
                              <ScrollView>
                                {
                                  performance[prfm.key].map((elm, index) => {
                                    return (
                                      <PlayerBlock
                                        key={index}
                                        lastname={elm?.firstname}
                                        firstname={elm?.lastname}
                                        image={elm?.image}
                                        value={elm?.value}
                                      />
                                    )
                                  })
                                }
                              </ScrollView>
                              :
                              <NoData message={prfm.message} />
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
      <View style={[PerformanceStyles.actionPlusContainer, PerformanceStyles.shadow]}  >
        <TouchableOpacity style={PerformanceStyles.actionPlus} onPress={() => navigator.navigate('FormPerformance')} >
          <MaterialCommunityIcons name="soccer-field" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View >
  );
};

const PlayerBlock = ({ firstname, lastname, image, value }) => {
  return (
    <View style={PerformanceStyles.playerContainer} >
      <View style={PerformanceStyles.playerInfo}  >
        <Image
          style={PerformanceStyles.imageStyle}
          source={RandomImageSource(image ?? 1)}
        />
        <Text style={PerformanceStyles.fullname} >{lastname} {firstname}</Text>

      </View>
      <View style={PerformanceStyles.playerValue}  >
        <Text>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#38761D',
    paddingHorizontal: 13,
    paddingVertical: 2,
    borderRadius: 4,
    paddingBottom: 4,
    overflow: 'hidden',
    marginTop: 20,
    borderColor: '#38761D',
    borderWidth: 2
  },
});

export default ListPerformance;

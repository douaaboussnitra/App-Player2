import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Matchs from '../../data/Matchs.json'
import moment from 'moment';
import CustomIcons from '../shared/CustomIcons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';
const ListMatch = () => {
  const [matchs, setMatchs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigation()
  useEffect(() => {
    navigator.addListener('focus', () => {
      handlerActions('MATCHS')
    })
  }, [])

  const handlerActions = (KEY, RES = null) => {
    switch (KEY) {
      case 'ONE_MATCH':
        navigator.navigate('OneMatch', RES)
        break
      case 'MATCHS':
        setMatchs(Matchs.reduce((result, item) => {
          const dateObj = moment(item.date);
          const key = dateObj.format("MMMM YYYY");
          if (!result[key]) {
            result[key] = [];
          }
          result[key].push(item);

          return result;
        }, {}))
        setLoading(false);
        break;

      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} >
        {
          Object.keys(matchs).map((keyName, index) => {
            return (
              <React.Fragment key={index} >
                <View style={[styles.matchDateGroupContainer]}>
                  <Text style={{ color: '#464646', fontSize: 20, fontWeight: 'bold' }}>{keyName}</Text>
                </View>
                {
                  matchs[keyName] &&
                  [...(matchs[keyName] ?? [])].map(({ date, awayTeam, homeTeam, players, awayScore, homeScore, round }, j) => {
                    return (
                      <TouchableOpacity onPress={() => handlerActions('ONE_MATCH', { date, awayTeam, homeTeam, players, awayScore, homeScore, round })} key={j} style={[styles.matchContainer]} >
                        <View style={[styles.saisonContainer]}>
                          <View style={[styles.saisonBlock]}><Text style={{ color: 'white', fontWeight: 'bold' }}>{round?.name}</Text></View>
                        </View>
                        <View style={[styles.clubContainer]}>
                          <View style={[styles.clubHomeContainer]} >
                            <Image source={{ uri: homeTeam?.profileImage }} style={{ width: 25, height: 25 }} />
                            <Text style={{ color: 'white', fontWeight: 'bold' }} >{homeTeam?.name}</Text>
                          </View>
                          <View style={[styles.clubResultContainer]} >
                            <View style={[styles.clubResult]}><Text style={{ color: 'white', fontWeight: 'bold' }} >{homeScore ?? 0}</Text></View>
                            <View style={[styles.clubResult]}><Text style={{ color: 'white', fontWeight: 'bold' }}>{awayScore ?? 0}</Text></View>
                          </View>
                          <View style={[styles.clubAwayContainer]} >
                            <Image source={{ uri: awayTeam?.profileImage }} style={{ width: 25, height: 25 }} />
                            <Text style={{ color: 'white', fontWeight: 'bold' }} >{awayTeam?.name}</Text>
                          </View>
                        </View>
                        <View style={[styles.matchTimeContainer]}>
                          <View style={[styles.matchTimeBlock]}>
                            <CustomIcons type={"MaterialIcons"} style={{ marginHorizontal: 8 }} name="date-range" size={12} color="white" />
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>{moment(date).format(" D MMM ")}</Text>
                            <CustomIcons type={"Entypo"} name="back-in-time" style={{ marginHorizontal: 8 }} size={12} color="white" />
                            <Text style={{ color: 'white', fontWeight: 'bold' }}> {moment(date).format(" h:mm A")}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    )
                  })
                }
              </React.Fragment>
            );
          })
        }

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  matchDateGroupContainer: {
    padding: 10
  },
  matchTimeBlock: {
    backgroundColor: '#d7c4c436',
    width: '96%',
    borderRadius: 5,
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  matchTimeContainer: {
    position: 'absolute',
    bottom: 4,
    height: 30,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  saisonBlock: {
    // backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 2
  },
  saisonContainer: {
    position: 'absolute',
    top: 2,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  clubResult: {
    backgroundColor: '#d7c4c436',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  clubResultContainer: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  clubAwayContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '35%'
  },
  clubHomeContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '35%'
  },
  matchContainer: {
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 0,
    paddingBottom: 40,
    paddingTop: 25,
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 50
  },
});

export default ListMatch;

import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import { Image } from 'react-native';
import moment from 'moment';
import bgImage from '../../assets/images/terrain.png';
import MatchStyles from './style/style.match';

const OneMatch = () => {
  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const [playersTeam, setPlayersTeam] = useState({
    team: 'homeTeam',
    isMain: {
      awayTeam: [],
      homeTeam: [],
    },
    isNotMain: {
      awayTeam: [],
      homeTeam: [],
    }
  })
  const { date, awayTeam, homeTeam, players, awayScore, homeScore, round } = route?.params ?? false;
  useEffect(() => {
    let playersTeam_ = [],
      playersAway = players.filter(pl => pl.matchTeamId == awayTeam?.awayMatchTeamId),
      playersHome = players.filter(pl => pl.matchTeamId == homeTeam?.homeMatchTeamId);
    playersTeam_ = {
      team: 'homeTeam',
      isMain: {
        awayTeam: playersAway.filter(pl => pl.isMain),
        homeTeam: playersHome.filter(pl => pl.isMain),
      },
      isNotMain: {
        awayTeam: playersAway.filter(pl => !pl.isMain),
        homeTeam: playersHome.filter(pl => !pl.isMain),
      }
    }
    setPlayersTeam(playersTeam_);
    setLoading(false)
  }, [])

  return (
    <View style={{ flex: 1 }}>

      <ScrollView contentContainerStyle={MatchStyles.container}>
        {
          loading ? <ActivityIndicator style={{ flex: 1 }} size="large" color={Colors.matchPalette.primary} /> : (<>
            <View style={[MatchStyles.titleContainer]}>
              <Text style={[MatchStyles.titleContent]}>{moment(date).format('MMM D, YYYY h:mm A')} | {round?.name} </Text>
            </View>
            <View style={[MatchStyles.clubsContainer]}>
              <View style={[MatchStyles.clubContainer]}>
                <LinearGradient
                  colors={['#fff', 'rgb(6,59,0)', '#fff']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={[MatchStyles.clubBlock, MatchStyles.clubBlockLeft]}
                >
                  <Text style={MatchStyles.clubName}>{homeTeam?.name}</Text>
                </LinearGradient>
                <Image source={{ uri: homeTeam?.profileImage }} style={[MatchStyles.clubImage, MatchStyles.clubImageLeft]} />
              </View>
              <View style={[MatchStyles.clubResultContainer]} >
                <View style={[MatchStyles.clubResult]}><Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }} >{homeScore ?? 0}</Text></View>
                <View style={[MatchStyles.clubResult]}><Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }} >:</Text></View>
                <View style={[MatchStyles.clubResult]}><Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{awayScore ?? 0}</Text></View>
              </View>
              <View style={[MatchStyles.clubContainer]}>
                <LinearGradient
                  colors={['#fff', 'rgb(0, 6, 0)', '#fff']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={[MatchStyles.clubBlock, MatchStyles.clubBlockRight]}
                >
                  <Text style={MatchStyles.clubName}>{awayTeam?.name}</Text>
                </LinearGradient>
                <Image source={{ uri: awayTeam?.profileImage }} style={[MatchStyles.clubImage, MatchStyles.clubImageRight]} />
              </View>
            </View>
            <View style={[MatchStyles.playersContainer]} >
              <View style={[MatchStyles.playersFilter]} >
                <TouchableOpacity onPress={() => setPlayersTeam({ ...playersTeam, team: 'homeTeam' })} style={[MatchStyles.playersFilterClub, playersTeam?.team === 'homeTeam' && MatchStyles.playersFilterClubActive]}>
                  <Image source={{ uri: homeTeam?.profileImage }} style={[MatchStyles.playerClubImage]} />
                  <Text style={[MatchStyles.playersFilterClubText, playersTeam?.team === 'homeTeam' && MatchStyles.playersFilterClubTextActive]}>{homeTeam?.name}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setPlayersTeam({ ...playersTeam, team: 'awayTeam' })} style={[MatchStyles.playersFilterClub, playersTeam?.team === 'awayTeam' && MatchStyles.playersFilterClubActive]}>
                  <Image source={{ uri: awayTeam?.profileImage }} style={[MatchStyles.playerClubImage]} />
                  <Text style={[MatchStyles.playersFilterClubText, playersTeam?.team === 'awayTeam' && MatchStyles.playersFilterClubTextActive]}>{awayTeam?.name}</Text></TouchableOpacity>
              </View>
              {/* Content */}

              <View style={[MatchStyles.playersBlockContainer]}>
                <Text style={[MatchStyles.systemPlayContainer]}>{route?.params[playersTeam?.team]?.system_play?.label} </Text>
                <View style={[MatchStyles.playersBlock, { backgroundColor: 'black' }]}>
                  <ImageBackground source={bgImage} style={[{ width: '100%', height: '100%' }]}>
                    <View style={[MatchStyles.playersAbsContainer]} >
                      {
                        playersTeam?.isMain[playersTeam?.team]?.map((pl, i) => {
                          return (
                            <TouchableOpacity
                              key={i}
                              style={[MatchStyles.shirtImg, i === 0 ? MatchStyles.goalKeeper : MatchStyles[`player${route?.params[playersTeam?.team]?.system_play?.id}${i}`]]}
                            >
                              <Image
                                resizeMode="center"
                                style={{ width: '100%', height: '100%' }}
                                source={{ uri: pl?.profileImage }}
                              />
                              <Text style={MatchStyles.playerNum}>{pl?.player?.backNumber}</Text>
                            </TouchableOpacity>
                          )
                        })
                      }
                    </View>
                  </ImageBackground>
                </View>
              </View>
              <View style={[MatchStyles.playersRemplacementContainer]} >
                <ScrollView horizontal={true} contentContainerStyle={MatchStyles.playersRemplacementBlockScroll}>
                  {
                    playersTeam?.isNotMain[playersTeam?.team]?.map((pl, i) => {
                      return (
                        <TouchableOpacity
                          key={i}
                          style={[MatchStyles.playersRemplacementBlock]}
                        >
                          <Image
                            resizeMode="contain"
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: pl?.profileImage }}
                          />
                          <Text style={MatchStyles.playerNum}>{pl?.player?.backNumber}</Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </ScrollView>
              </View>
            </View>

          </>)
        }
      </ScrollView >
    </View>

  );
}


export default OneMatch;

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import ProfileStyles from './style/style.profile';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { retrieveData, storeData } from '../utils/utils';
import RandomImageSource from '../shared/RandomImageSource';
import NoData from '../shared/NoData';
import Colors from '../../constants/Colors';

const ListProfile = () => {
  const navigator = useNavigation();
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    navigator.addListener('focus', () => {
      handelAction('players');
    })
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handelAction = async (type, request = null) => {
    setLoading(true);
    switch (type) {
      case 'players':
        var players__ = await retrieveData("players");
        setPlayers(Array(...players__).reverse());
        setLoading(false);
        break
      case 'ON_PLAYER':
        navigator.navigate('OneProfile', { id: request })
        break
      case 'UPDATE':
        navigator.navigate('FormProfile', { player: request })
        break;
      case 'DESTROY':
        let players_ = await retrieveData("players");
        const new_players_ = Array(...players_).reverse().filter((player) => player.id != request);
        await storeData("players", new_players_);
        setPlayers(new_players_)
        setLoading(false);
        break;
      default:
        setLoading(false);
        break;
    }
  }
  return (
    <View style={styles.container}>
      {
        loading ? (
          <ActivityIndicator style={{ flex: 1 }} size="large" color={Colors.playerPalette.primary} />
        ) : (<ScrollView contentContainerStyle={ProfileStyles.scrollContainer} >
          <View style={ProfileStyles.usersContainer}>
            {
              players.length > 0 ?
                players.map((player, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => handelAction('ON_PLAYER', player?.id)} style={[ProfileStyles.userContainer, ProfileStyles.shadow]} >
                      <View style={ProfileStyles.userBlockContainer} >
                        <TouchableOpacity style={ProfileStyles.editIcon} onPress={() => handelAction('UPDATE', player)} >
                          <FontAwesome5 name="user-edit" size={20} color="#0B5394" />
                        </TouchableOpacity>
                        <TouchableOpacity style={ProfileStyles.destroyIcon} onPress={() => handelAction('DESTROY', player.id)} >
                          <AntDesign name="delete" size={20} color="#990000" />
                        </TouchableOpacity>
                        <View style={ProfileStyles.userImage}>
                          <Image
                            style={ProfileStyles.image}
                            source={RandomImageSource(player?.image ?? 1)}
                          />
                        </View>
                        <View style={ProfileStyles.userBody}>
                          <View><Text style={ProfileStyles.textInfo} >{player?.firstname} {player?.lastname}  </Text></View>
                          <View><Text style={ProfileStyles.textInfo} >{player?.age} ans </Text></View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                })
                : <NoData message="No data available." />
            }
          </View>
        </ScrollView>)
      }

      <View style={[ProfileStyles.actionPlusContainer, ProfileStyles.shadow]}  >
        <TouchableOpacity style={ProfileStyles.actionPlus} onPress={() => navigator.navigate('FormProfile')} >
          <Feather name="user-plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ListProfile;

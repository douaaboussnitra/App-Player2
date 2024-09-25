import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, ActivityIndicator, Text } from 'react-native';
import NotifyStyles from './style/style.notify';
import { useNavigation } from '@react-navigation/native';
import NoData from '../shared/NoData';
import { formatName, retrieveData, storeData } from '../utils/utils';
import OneNotify from './One.notify';
import CustomIcons from '../shared/CustomIcons';
import Colors from '../../constants/Colors';
const ListNotify = () => {
  const [loading, setLoading] = useState(true);
  const [filter, sefilter] = useState({
    notify: true,
    message: true
  });
  const [messages, setMessages] = useState([]);
  const navigator = useNavigation()
  useEffect(() => {
    navigator.addListener('focus', () => {
      handleActions('MESSAGES');
    })
  }, []);

  const handleActions = async (CASE, request = null) => {
    var messages_, players_;
    setLoading(true);
    switch (CASE) {
      case 'MESSAGES':
        players_ = await retrieveData("players");
        messages_ = await retrieveData("message");
        if (!messages_ || !players_) {
          setLoading(false);
          return false
        }
        let items = Array(...messages_).reverse().map(ms => {
          const player = players_.find(pl => pl.id == ms.player);
          return Object({ ...ms, image: player?.image ?? 1, fullname: formatName(player?.firstname ?? '', player?.lastname ?? '') });
        })
        setMessages(items);
        setLoading(false);
        break
      case 'TYPE':
        let filter_ = { ...filter, [request]: !filter[request] }, TYPES = Object.keys(filter_).filter(key => filter_[key]),
          players_ = await retrieveData("players"),
          messages_ = await retrieveData("message");
        let messages$ = Array(...messages_).reverse().map(ms => {
          const player = players_.find(pl => pl.id == ms.player);
          return Object({ ...ms, image: player?.image ?? 1, fullname: formatName(player?.firstname ?? '', player?.lastname ?? '') });
        })
        sefilter(filter_);
        setMessages(Array(...messages$.filter(ms => TYPES.length == 0 ? true : TYPES.includes(ms.type))).reverse());
        setLoading(false);
        break;
      case 'UPDATE':
        navigator.navigate('FormNotify', { request })
        break
      case 'DESTROY':
        messages_ = await retrieveData("message");
        const new_messages_ = messages_.filter((_, index) => index != request);
        await storeData("message", new_messages_);
        setMessages(new_messages_)
        setLoading(false);
        break;
      default:
        setLoading(false);
        break;
    }
  }
  // Load messages when the component is first mounted


  if (loading) {
    return (
      <View style={NotifyStyles.listContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  console.log(Array(...messages));
  return (
    <View style={NotifyStyles.listContainer}>
      <View style={NotifyStyles.FilterContainer} >
        <TouchableOpacity onPress={() => handleActions('TYPE', 'notify')} style={[NotifyStyles.FilterItem, filter.notify && { backgroundColor: '#730004' }]} >
          <CustomIcons type={"MaterialCommunityIcons"} name="bell" size={20} color={filter.notify ? 'white' : "#900006"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleActions('TYPE', 'message')} style={[NotifyStyles.FilterItem, filter.message && { backgroundColor: Colors.primary }]} >
          <CustomIcons type={"MaterialCommunityIcons"} name="android-messages" size={20} color={filter.message ? "white" : Colors.primary} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={NotifyStyles.scrollContainer}>
        {
          Array(...messages)?.length > 0 ?
            Array(...messages)?.map((ct, i) => {
              return (
                <OneNotify
                  key={i}
                  onUpdate={() => handleActions('UPDATE', { ...ct, index: i })}
                  onDestroy={() => handleActions('DESTROY', i)}
                  name={ct?.fullname}
                  color={ct?.type === 'notify' ? '#730004' : Colors.primary}
                  content={ct?.message}
                  created_at={`${ct?.created_at?.date} ${ct?.created_at?.hour}`}
                  image={ct?.image}
                />
              )
            })
            : <NoData message="No data available." />
        }
      </ScrollView>
      <View style={NotifyStyles.actionPlusContainer}  >
        <TouchableOpacity style={NotifyStyles.actionPlus} onPress={() => navigator.navigate('FormNotify')} >
          <CustomIcons type={"MaterialCommunityIcons"} name="email-plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListNotify;

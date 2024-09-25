import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CustomIcons from "../shared/CustomIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { retrieveData } from "../utils/utils";
import RandomImageSource from "../shared/RandomImageSource";
import PERFORMANCE from "../../constants/Performance";
import PHYSICAL from "../../constants/Physical";

const OneProfile = () => {

  const [state, setState] = useState({
    player: null,
    loading: true,
    physical: null,
    performance: null,
    notify: null
  });
  const navigator = useNavigation();
  const route = useRoute();
  const ID = route?.params?.id ?? false;
  useEffect(() => {
    navigator.addListener('focus', () => {
      if (ID) handlerActions('PLAYER');
    })
  }, [])

  const handlerActions = async (KEY, RES = null) => {
    let updates = {
      player: null,
      loading: true,
      physical: null,
      performance: null,
      notify: []
    };
    switch (KEY) {
      case 'PLAYER':
        const players__ = await retrieveData("players");
        updates.player = Array(...players__).find(({ id }) => id === ID);
        const physical_ = await retrieveData("physical");
        const defaultValue = {
          height: 0,
          mg: 0,
          mg_gl: 0,
          mg_impedance: 0,
          mg_plus: 0,
          width: 0
        };

        updates.physical = Array(...physical_).filter(({ player }) => player === ID).reduce((acc, item) => {
          const { created_at, ...rest } = item;

          Object.entries(rest).forEach(([key, value]) => {
            if (value !== null) {
              acc[key] = Number(value);
            } else if (acc[key] === undefined) {
              acc[key] = Number(defaultValue[key]);
            }
          });

          return acc;
        }, {})

        const performance_ = await retrieveData("performance");
        updates.performance = Array(...performance_).filter(({ player }) => player === ID).reduce((accumulator, entry) => {
          accumulator.assists += parseInt(entry.assists) || 0;
          accumulator.goals += parseInt(entry.goals) || 0;
          accumulator.play_time += parseInt(entry.play_time) || 0;
          accumulator.red_cards += parseInt(entry.red_cards) || 0;
          accumulator.yellow_cards += parseInt(entry.yellow_cards) || 0;
          return accumulator;
        }, {
          assists: 0,
          goals: 0,
          play_time: 0,
          red_cards: 0,
          yellow_cards: 0
        });
        const messages_ = await retrieveData("message");
        updates.loading = false;
        updates.notify = Array(...messages_).filter(({ player }) => player === ID);
        setState({ ...state, ...updates });
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
          <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
        </View> */}

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image source={RandomImageSource(state?.player?.image)} style={styles.imageProfle} resizeMode="center"></Image>
          </View>
          {/* <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
          </View> */}
          {/* <View style={styles.active}></View> */}
          {/* <View style={styles.add}>
            <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
          </View> */}
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "400", fontSize: 26 }]}>{state?.player?.lastname}</Text>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 26 }]}>{state?.player?.firstname}</Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{state?.player?.address}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>{state?.physical?.width} kg</Text>
            <Text style={[styles.text, styles.subText]}>Poids</Text>
          </View>
          <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
            <Text style={[styles.text, { fontSize: 24 }]}>{state?.physical?.height} cm</Text>
            <Text style={[styles.text, styles.subText]}>Taille</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>{((state?.physical?.width * state?.physical?.height) / 100)?.toFixed(2) ?? 0.00}</Text>
            <Text style={[styles.text, styles.subText]}>IMC</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              PERFORMANCE.map((perfo, i) => {
                return (
                  <View key={i} style={styles.mediaImageContainer}>
                    <View style={[styles.mediaBlockContainer, { backgroundColor: perfo?.color }]} >
                      <View style={styles.mediaBlockIcon} >
                        <CustomIcons type={perfo?.icon?.type} name={perfo?.icon?.name} size={24} color={'#fff'} />
                      </View>
                      <Text style={[styles.text, { fontSize: 24, color: '#fff' }]} >{state?.performance?.[perfo.key]}</Text>
                      <Text style={[styles.text, styles.subText, { color: '#fff' }]} >{perfo.label}</Text>
                    </View>
                  </View>
                )
              })
            }
            {
              PHYSICAL.slice(2).map((phys, i) => {
                return (
                  <View key={i} style={styles.mediaImageContainer}>
                    <View style={[styles.mediaBlockContainer, { backgroundColor: phys?.color }]} >
                      <View style={styles.mediaBlockIcon} >
                        <CustomIcons type={phys?.icon?.type} name={phys?.icon?.name} size={24} color={'#fff'} />
                      </View>
                      <Text style={[styles.text, { fontSize: 24, color: '#fff' }]} >{state?.physical?.[phys.key]}</Text>
                      <Text style={[styles.text, styles.subText, { color: '#fff' }]} >{phys.label}</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
        <Text style={[styles.subText, styles.recent, { fontSize: 17, marginBottom: 20 }]}>Messages</Text>
        <View style={{ alignItems: "center" }}>
          {
            state?.notify ?
              state?.notify.map((ms, i) => {
                return (
                  <View style={styles.recentItem} key={i}>
                    <View style={styles.activityIndicator}></View>
                    <View style={{ width: 250 }}>
                      <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                        {ms.message}
                      </Text>
                    </View>
                  </View>
                )
              })
              : <Text>No Data</Text>
          }

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default OneProfile;

const styles = StyleSheet.create({
  mediaBlockIcon: {
    width: 70,
    height: 70,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    padding: 10,
    marginBottom: 10
  },
  mediaBlockContainer: {
    backgroundColor: '#DCDDDE',
    borderBottomWidth: 3,
    borderBottomColor: '#52575D',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  imageProfle: {
    flex: 1,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 100,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  profileImage: {
    marginTop: 10,
    width: 180,
    height: 180,
    padding: 6,
    overflow: 'hidden',
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 8,
    borderColor: '#41444B'
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
});

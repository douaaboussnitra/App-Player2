import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { getFullHeight, getFullWidth } from '../utils/DimensionsUtil';
import { DAYS } from '../../constants/Days';
import CustomIcons from '../shared/CustomIcons';
import { PlayerBlockDashboard, NoPlayerBlockDashboard } from './components/index';
import Colors from '../../constants/Colors';
/*
#53aca0
#53aca0
#e6e9f6
#7fcac2
#0e6b57
*/
const IndexDashboard = () => {
  const [state, setState] = useState({
    graphCount: {
      players: [20, 40, 120, 4, 22, 120, 220],
      match: [10, 40, 20, 100, 220, 120, 220],
      training: [10, 140, 120, 120, 22, 120, 220]
    },
    graphActive: 'players'
  })
  const { graphActive, graphCount } = state;
  return (
    <View style={styles.container}>
      {/* Block 1  */}
      <View style={[styles.chartContainer]} >
        <View style={[styles.chartHeadContainer]} >
          <Text style={[styles.chartHeadLabel, { fontSize: 15, fontWeight: 'bold' }]} >Daily {graphActive}</Text>
          <View style={[styles.chartHeadTagsContainer]}  >
            <TouchableOpacity onPress={() => setState({ ...state, graphActive: 'players' })} style={[styles.chartHeadTag, graphActive == 'players' && styles.chartHeadTagActive]}>
              <CustomIcons style={[styles.chartHeadIcon, graphActive == 'players' && styles.chartHeadIconActive]} type={'FontAwesome5'} name="users" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setState({ ...state, graphActive: 'match' })} style={[styles.chartHeadTag, graphActive == 'match' && styles.chartHeadTagActive]}>
              <CustomIcons style={[styles.chartHeadIcon, graphActive == 'match' && styles.chartHeadIconActive]} type={'MaterialCommunityIcons'} name="clipboard-file" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setState({ ...state, graphActive: 'training' })} style={[styles.chartHeadTag, graphActive == 'training' && styles.chartHeadTagActive]}>
              <CustomIcons style={[styles.chartHeadIcon, graphActive == 'training' && styles.chartHeadIconActive]} type={'FontAwesome5'} name="briefcase-medical" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.chartBarContainer]} >
          {
            graphCount?.[graphActive].map((count, index) => {
              return (
                <View key={index} style={[styles.charBarBlock]}>
                  <View style={[styles.charCountContainer]}><Text style={[styles.charCount]}>{count}</Text></View>
                  <TouchableOpacity style={[styles.chartBar, { height: count }]} ></TouchableOpacity>
                  <View style={[styles.charBarLabelContainer]} ><Text style={[styles.charBarLabel]}  >{DAYS[index]}</Text></View>
                </View>

              )
            })
          }
        </View>
      </View>
      {/* Block 2  */}
      <View style={[styles.scoreConatiner]} >
        <View style={[styles.scoreBlockConatiner]}>
          {/* <ImageBackground source={bgChartImage} style={{ flex: 1 }}> */}
          <View style={[styles.scoreHeadTopBlock]}  >
            <Text style={[styles.scoreHeadTopLabel]} >TOP BUTEUR</Text>
          </View>
          <PlayerBlockDashboard firstname={'bousnitra'} lastname={'douaa'} image={2} />
          <PlayerBlockDashboard firstname={'bousnitra'} lastname={'douaa'} image={9} color={"#a85b31"} />
          <PlayerBlockDashboard firstname={'bousnitra'} lastname={'douaa'} imasge={8} color={'#a7a7a7'} />
          {/* </ImageBackground> */}
        </View>
        <View style={[styles.scoreBlockConatiner]}>
          {/* <ImageBackground source={bgChartImage} style={{ flex: 1 }}> */}
          <View style={[styles.scoreHeadTopBlock]}  >
            <Text style={[styles.scoreHeadTopLabel]} >TOP PASSEUR</Text>
          </View>
          <PlayerBlockDashboard firstname={'bousnitra'} lastname={'douaa'} image={2} />
          <NoPlayerBlockDashboard score={2} />
          <NoPlayerBlockDashboard score={3} />
          {/* <PlayerBlockDashboard firstname={'bousnitra'} lastname={'douaa'} image={8} /> */}
          {/* <PlayerBlockDashboard firstname={'bousnitra'} lastname={'douaa'} image={9} /> */}
          {/* </ImageBackground> */}
        </View>
      </View>
      {/* Block 3  */}
      <View style={[styles.alertConatiner]} >
        <View style={[styles.alertBlockConatiner]}>
          <View style={[styles.scoreHeadTopBlock]}  >
            <Text style={[styles.scoreHeadTopLabel]} >EVENTS OF TODAY</Text>
          </View>
          <ScrollView  >
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
            <View style={[styles.eventContainer]} >
              <View style={[styles.eventBlock]} >
                <View style={[styles.eventType]} >
                  <CustomIcons type={"MaterialCommunityIcons"} name="bell-alert" size={16} color="white" />
                </View>
                <View style={[styles.eventBody]}><Text style={[styles.eventBodyText]}>Check the File Path: Make sure that the file path to PlayerBlock.dashboard is correct and matches the location of the file.</Text></View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  eventBodyText: {
    color: Colors.active
  },
  eventContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventBlock: {
    flexDirection: 'row',
    height: undefined,
    width: '95%',
    borderRadius: 4,
    backgroundColor: '#e5e5e524',
    overflow: 'hidden'
  },
  eventType: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4
  },
  eventBody: {
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  scoreHeadTopLabel: {
    color: Colors.active,
    fontSize: 15,
    fontWeight: 'bold'
  },
  scoreHeadTopBlock: {
    backgroundColor: '#e5e5e524',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35
  },

  chartHeadIconActive: {
    color: 'white'
  },
  chartHeadIcon: {
    color: Colors.active
  },
  chartHeadTagActive: {
    backgroundColor: Colors.active
  },
  chartHeadTag: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 4,
    marginHorizontal: 4,
    marginTop: 5,
    paddingBottom: 6,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chartHeadTagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  charCount: {
    color: Colors.active,
    fontSize: 12,
    fontWeight: 'bold'
  },
  charCountContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  alertConatiner: {
    height: getFullHeight() / 4.5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  alertBlockConatiner: {
    height: '100%',
    width: '96%',
    borderRadius: 15,
    backgroundColor: '#E9EAF9'
  },
  scoreConatiner: {
    height: getFullHeight() / 3,
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  scoreBlockConatiner: {
    height: '100%',
    width: '49%',
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: '#E9EAF9',
    justifyContent: 'space-evenly'
  },
  chartHeadLabel: {
    color: Colors.active,
    fontSize: 30
  },
  chartHeadContainer: {
    position: 'absolute',
    left: '5%',
    zIndex: 10,
    top: '5%',
  },
  charBarLabel: {
    color: Colors.active,
    fontWeight: 'bold'
  },
  charBarLabelContainer: {
    height: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  charBarBlock: {
    width: '8%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  },
  chartBar: {
    width: '100%',
    backgroundColor: Colors.active,
    borderRadius: 10
  },
  chartBarContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: 10,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  chartContainer: {
    position: 'relative',
    backgroundColor: '#E9EAF9',
    height: getFullHeight() / 3,
    width: getFullWidth(),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    height: getFullHeight(),
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default IndexDashboard;

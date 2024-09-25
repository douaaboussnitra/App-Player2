import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { retrieveData } from '../utils/utils';
import PERFORMANCE from '../../constants/Performance';
import BarTags from '../shared/BarTags';
import PHYSICAL from '../../constants/Physical';
import Colors from '../../constants/Colors';
import NoData from '../shared/NoData';

const ListAnalysis = () => {
  const [focus, setFocused] = useState({
    performance: '',
    physical: '',
  });
  const navigator = useNavigation();
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (focus.performance) {
      handlerActions('performance');
    }
    if (focus.physical) {
      handlerActions('physical');
    }
  }, [focus]);

  useEffect(() => {
    const prf = JSON.parse(JSON.stringify(PERFORMANCE));
    const phy = JSON.parse(JSON.stringify(PHYSICAL));
    const focusEventListener = () => {
      setFocused({
        performance: prf.shift()?.key ?? 'goals',
        physical: phy.shift()?.key ?? 'width'
      });
      handlerActions('physical');
      handlerActions('performance');
    };
    navigator.addListener('focus', focusEventListener);

    return () => {
      navigator.removeListener('focus', focusEventListener);
    };
  }, []);

  const handlerActions = async (type, request = null) => {
    let data, playerIds, players_, labels, aggregatedIds;
    switch (type) {
      case 'performance':
        players_ = await retrieveData("players");
        if (!players_) {
          return false;
        }
        playerIds = Array(...players_).reverse().map(pl => pl.id);
        if (playerIds.length == 0) return false;
        data = await handlerActions('getValuePperformance', { type: focus.performance, Ids: playerIds });
        labels = Array(...players_).reverse().map(pl => `${pl.firstname} , ${pl.lastname}`);
        if (data.length > 0 && labels.length > 0) {
          setChart(prevChart => ({
            ...prevChart,
            performance: {
              ...prevChart.performance,
              data,
              labels
            }
          }));
        }
        break;
      case 'getValuePperformance':
        var { type, Ids } = request;
        const performance__ = await retrieveData("performance");
        if (!performance__) {
          return false;
        }
        const performanceMap = performance__.reduce((acc, currentValue) => {
          const ID = currentValue.player;
          if (!acc[ID]) {
            acc[ID] = 0;
          }
          acc[ID] += Number(currentValue[type] ?? 0);
          return acc;
        }, {});
        aggregatedIds = Ids.map(ID => performanceMap[ID] || 0);
        return aggregatedIds;
        break
      case 'physical':
        players_ = await retrieveData("players");
        playerIds = Array(...players_).reverse().map(pl => pl.id);
        if (playerIds.length == 0) return false;
        data = await handlerActions('getValuePhysical', { type: focus.physical, Ids: playerIds });
        labels = Array(...players_).reverse().map(pl => `${pl.firstname} , ${pl.lastname}`);
        if (data.length > 0 && labels.length > 0) {
          setChart(prevChart => ({
            ...prevChart,
            physical: {
              ...prevChart.physical,
              data,
              labels
            }
          }));
        }
        break;
      case 'getValuePhysical':
        var { type, Ids } = request;
        const physical__ = await retrieveData("physical");
        if (!physical__) {
          return false;
        }
        const physicalMap = physical__.reduce((acc, currentValue) => {
          const ID = currentValue.player;
          if (!acc[ID]) {
            acc[ID] = 0;
          }
          acc[ID] += Number(currentValue[type] ?? 0);
          return acc;
        }, {});
        aggregatedIds = Ids.map(ID => physicalMap[ID] || 0);
        return aggregatedIds;
        break
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      <BarTags
        focus={focus.performance}
        setFocused={(performance) => setFocused({ ...focus, performance })}
        items={PERFORMANCE.map(({ key, label, icon }) => Object({ key, label, icon }))}
        primaryColor={Colors.primary} secondaryColor={'black'}
      />
      {
        (chart?.performance?.label.length > 0 && chart?.performance?.data.length > 0) ? <LineChart
          data={{
            labels: chart?.performance?.labels ?? [],
            datasets: [{
              data: chart?.performance?.data ?? []
            }],
          }}
          width={Dimensions.get("window").width}
          height={320}
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#000",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0,41,85, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0,41,85, ${opacity})`,
            propsForDots: {
              r: "8",
              strokeWidth: "0",
            }
          }}
          bezier
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            overflow: 'hidden'
          }}
        /> : <NoData message={"No data"} />
      }

      <BarTags
        focus={focus.physical}
        setFocused={(physical) => setFocused({ ...focus, physical })}
        items={PHYSICAL.map(({ key, label, icon }) => Object({ key, label, icon }))}
        primaryColor={Colors.primary} secondaryColor={'black'}
      />

      {
        (chart?.performance?.label.length > 0 && chart?.performance?.data.length > 0) ?
          <LineChart
            data={{
              labels: chart?.physical?.labels ?? [],
              datasets: [{
                data: chart?.physical?.data ?? []
              }],
            }}
            width={Dimensions.get("window").width}
            height={320}
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#FBF4EF",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0,41,85, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0,41,85, ${opacity})`,
              propsForDots: {
                r: "8",
                strokeWidth: "0",
              },

            }}
            bezier
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              overflow: 'hidden'
            }}
          /> : <NoData message={"No data"} />
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ListAnalysis;

import React, { useState, useEffect } from 'react';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import { Dimensions, Text, View } from 'react-native';
import { SCREEN_WIDTH } from '../utils/DimensionsUtil';

const ChartKit = () => {
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(51,153,255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <ProgressChart
        data={data}
        width={SCREEN_WIDTH}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["bousnitra", "Kcds", "MLOI", "CDS", "MaCDSy", "csd"],
          datasets: [
            {
              data: [
                2,
                9,
                4,
                4,
                2,
                10
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisSuffix=" Gols"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#000",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(51,153,255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(51,153,255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "0",
            stroke: "#000"
          },

        }}
        bezier
        style={{
          marginVertical: 60,
          paddingHOrizontal: 300,
          borderRadius: 16
        }}
      />
    </View>
  )
}


export default ChartKit;
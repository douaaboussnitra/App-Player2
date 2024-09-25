/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React, { useState, useRef } from "react";
import { DefaultTheme, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormNotify from "../components/notify/Form.notify";
import ProfileScreen from "../screens/view/ProfileScreen";
import PerformanceScreen from "../screens/view/PerformanceScreen";
import PhysicalScreen from "../screens/view/PhysicalScreen";
import AnalysiScreen from "../screens/view/AnalysiScreen";
import DashboardScreen from "../screens/view/DashboardScreen";
import FormProfile from "../components/profile/Form.profile";
import OneProfile from "../components/profile/One.profile";
import FormPerformance from "../components/performance/Form.performance";
import OnePerformance from "../components/performance/One.performance";
import OneNotify from "../components/notify/One.notify";
import OnePhysical from "../components/physical/One.physical";
import FormPhysical from "../components/physical/Form.physical";
import Colors from "../constants/Colors";
import Menu from "../Layout/Menu";
import { Animated, ScrollView, TouchableOpacity, View } from "react-native";
import CustomIcons from "../components/shared/CustomIcons";
import TrainingScreen from "../screens/view/TrainingScreen";
import NotifyScreen from "../screens/view/NotifyScreen";
import FormTraining from "../components/training/Form.training";
import OneTraining from "../components/training/One.training";
import MatchScreen from "../screens/view/MatchScreen";
import OneMatch from "../components/match/One.match";
import FormMatch from "../components/match/Form.match";


/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function AdminNavigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const navigator = useNavigation()
  const handlerActions = (KEY, RES = null) => {
    switch (KEY) {
      case 'NAVIGATE':
        navigator.navigate(RES)
        break
      case 'CLOSE_OPEN':
        Animated.timing(scaleValue, {
          toValue: showMenu ? 1 : 0.88,
          duration: 300,
          useNativeDriver: true
        })
          .start()

        Animated.timing(offsetValue, {
          // YOur Random Value...
          toValue: showMenu ? 0 : 230,
          duration: 300,
          useNativeDriver: true
        })
          .start()

        Animated.timing(closeButtonOffset, {
          // YOur Random Value...
          toValue: !showMenu ? -30 : 0,
          duration: 300,
          useNativeDriver: true
        })
          .start()

        setShowMenu(!showMenu);
        break;

      default:
        break;
    }
  }
  return (
    <Menu handlerActions={handlerActions} showMenu={showMenu} offsetValue={offsetValue} scaleValue={scaleValue} closeButtonOffset={closeButtonOffset} children={
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        {/* Home */}
        <Stack.Screen
          options={{
            headerTitle: 'Dashboard', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: '#2934cc', // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('CLOSE_OPEN')}>
                {
                  showMenu ? <CustomIcons type={"Fontisto"} name="close-a" size={24} color="white" /> : <CustomIcons type={"SimpleLineIcons"} name="menu" size={24} color="white" />
                }
              </TouchableOpacity>
            )
          }}
          name="Home"
          component={DashboardScreen} />

        {/* Profile */}
        <Stack.Screen
          options={{
            headerTitle: 'Players', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.playerPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('CLOSE_OPEN')}>
                {
                  showMenu ? <CustomIcons type={"Fontisto"} name="close-a" size={24} color="white" /> : <CustomIcons type={"SimpleLineIcons"} name="menu" size={24} color="white" />
                }
              </TouchableOpacity>
            )
          }}
          name="Player" component={ProfileScreen} />
        <Stack.Screen options={{
          headerTitle: 'Create Player', // Title of the header
          headerTitleAlign: 'center', // Align the title in the center
          headerTintColor: 'white', // Color of the title and icons
          headerStyle: {
            backgroundColor: Colors.playerPalette.primary, // Background color of the header
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => handlerActions('NAVIGATE', 'Player')}>
              <CustomIcons type={"MaterialIcons"} name="arrow-back-ios" size={24} color="white" />
            </TouchableOpacity>
          )
        }}
          name="FormProfile" component={FormProfile} />
        <Stack.Screen options={{
          headerTitle: 'Player', // Title of the header
          headerTitleAlign: 'center', // Align the title in the center
          headerTintColor: 'white', // Color of the title and icons
          headerStyle: {
            backgroundColor: Colors.playerPalette.primary, // Background color of the header
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => handlerActions('NAVIGATE', 'Player')}>
              <CustomIcons type={"MaterialIcons"} name="arrow-back-ios" size={24} color="white" />
            </TouchableOpacity>
          )
        }}
          name="OneProfile" component={OneProfile} />
        {/* Analysis  */}
        <Stack.Screen
          options={{
            headerTitle: 'Analysis Data', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.analysisPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('CLOSE_OPEN')}>
                {
                  showMenu ? <CustomIcons type={"Fontisto"} name="close-a" size={24} color="white" /> : <CustomIcons type={"SimpleLineIcons"} name="menu" size={24} color="white" />
                }
              </TouchableOpacity>
            )
          }}
          name="Analysis" component={AnalysiScreen} />
        {/* Notify */}
        <Stack.Screen
          options={{
            headerTitle: 'Message', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.notifyPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('CLOSE_OPEN')}>
                {
                  showMenu ? <CustomIcons type={"Fontisto"} name="close-a" size={24} color="white" /> : <CustomIcons type={"SimpleLineIcons"} name="menu" size={24} color="white" />
                }
              </TouchableOpacity>
            )
          }}
          name="Notify" component={NotifyScreen} />
        <Stack.Screen
          options={{
            headerTitle: 'Create Message', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.notifyPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('NAVIGATE', 'Notify')}>
                <CustomIcons type={"MaterialIcons"} name="arrow-back-ios" size={24} color="white" />
              </TouchableOpacity>
            )
          }}
          name="FormNotify" component={FormNotify} />
        <Stack.Screen name="OneNotify" component={OneNotify} />
        {/* Performance  */}
        <Stack.Screen
          options={{
            headerTitle: 'Performance', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.performancePalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('CLOSE_OPEN')}>
                {
                  showMenu ? <CustomIcons type={"Fontisto"} name="close-a" size={24} color="white" /> : <CustomIcons type={"SimpleLineIcons"} name="menu" size={24} color="white" />
                }
              </TouchableOpacity>
            ),
          }}
          name="Performance" component={PerformanceScreen} />
        <Stack.Screen
          options={{
            headerTitle: 'Create Performance', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.performancePalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('NAVIGATE', 'Performance')}>
                <CustomIcons type={"MaterialIcons"} name="arrow-back-ios" size={24} color="white" />
              </TouchableOpacity>
            )
          }}
          name="FormPerformance" component={FormPerformance} />
        <Stack.Screen name="OnePerformance" component={OnePerformance} />
        {/*  Physical  */}
        <Stack.Screen
          options={{
            headerTitle: 'Physical', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.physicalPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('CLOSE_OPEN')}>
                {
                  showMenu ? <CustomIcons type={"Fontisto"} name="close-a" size={24} color="white" /> : <CustomIcons type={"SimpleLineIcons"} name="menu" size={24} color="white" />
                }
              </TouchableOpacity>
            )
          }}
          name="Physical" component={PhysicalScreen} />
        <Stack.Screen
          options={{
            headerTitle: 'Create Physical', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.physicalPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('NAVIGATE', 'Physical')}>
                <CustomIcons type={"MaterialIcons"} name="arrow-back-ios" size={24} color="white" />
              </TouchableOpacity>
            )
          }}
          name="FormPhysical" component={FormPhysical} />
        <Stack.Screen name="OnePhysical" component={OnePhysical} />
        {/* Training */}
        <Stack.Screen
          options={{
            headerTitle: 'Training', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.trainingPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('CLOSE_OPEN')}>
                {
                  showMenu ? <CustomIcons type={"Fontisto"} name="close-a" size={24} color="white" /> : <CustomIcons type={"SimpleLineIcons"} name="menu" size={24} color="white" />
                }
              </TouchableOpacity>
            )
          }}
          name="Training" component={TrainingScreen} />
        <Stack.Screen
          options={{
            headerTitle: 'Create Training', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.trainingPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('NAVIGATE', 'Training')}>
                <CustomIcons type={"MaterialIcons"} name="arrow-back-ios" size={24} color="white" />
              </TouchableOpacity>
            )
          }}
          name="FormTraining" component={FormTraining} />
        <Stack.Screen
          options={{
            headerTitle: 'One Training', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.trainingPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('NAVIGATE', 'Training')}>
                <CustomIcons type={"MaterialIcons"} name="arrow-back-ios" size={24} color="white" />
              </TouchableOpacity>
            )
          }}
          name="OneTraining" component={OneTraining} />
        {/* Match */}
        <Stack.Screen
          options={{
            headerTitle: 'Match', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.matchPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('CLOSE_OPEN')}>
                {
                  showMenu ? <CustomIcons type={"Fontisto"} name="close-a" size={24} color="white" /> : <CustomIcons type={"SimpleLineIcons"} name="menu" size={24} color="white" />
                }
              </TouchableOpacity>
            )
          }}
          name="Match" component={MatchScreen} />
        <Stack.Screen
          options={{
            headerTitle: 'Create Match', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.matchPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('NAVIGATE', 'Match')}>
                <CustomIcons type={"MaterialIcons"} name="arrow-back-ios" size={24} color="white" />
              </TouchableOpacity>
            )
          }}
          name="FormMatch" component={FormMatch} />
        <Stack.Screen
          options={{
            headerTitle: 'One Match', // Title of the header
            headerTitleAlign: 'center', // Align the title in the center
            headerTintColor: 'white', // Color of the title and icons
            headerStyle: {
              backgroundColor: Colors.matchPalette.primary, // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlerActions('NAVIGATE', 'Match')}>
                <CustomIcons type={"MaterialIcons"} name="arrow-back-ios" size={24} color="white" />
              </TouchableOpacity>
            )
          }}
          name="OneMatch" component={OneMatch} />
      </Stack.Navigator>
    } />
  );
}
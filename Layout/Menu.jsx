import React, { useEffect, useState } from 'react';
import { Animated, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from '../assets/images/avatars/1.png';
// Tab ICons...
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import Font from '../constants/Font';
import LINKS from './Links';
import { useAuth } from '../store/auth.store';

export default function Menu({ children, handlerActions, showMenu, offsetValue, scaleValue, closeButtonOffset }) {
  const [currentTab, setCurrentTab] = useState("Home");
  useEffect(() => {
    if (currentTab) {
      handlerActions('CLOSE_OPEN')
    }
  }, [currentTab])
  // To get the curretn Status of menu ...
  return (
    <View style={[styles.container, { backgroundColor: '#fff' }]}>
      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: Colors.active,
          marginTop: 20
        }}>Douâa Boussnitra</Text>
        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: Colors.active
          }}>View Profile</Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            LINKS.map((link, i) => <TabButton key={i} currentTab={currentTab} setCurrentTab={setCurrentTab} title={link.label} icon={link.icon} route={link.tabName} />)
          }
        </View>
        <View>
          <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={"LogOut"} icon={"LogOut"} route={"LogOut"} />
        </View>
      </View>
      <Animated.View
        style={[
          styles.overlayView,
          {
            borderRadius: showMenu ? 15 : 0,
            transform: [{ scale: scaleValue }, { translateX: offsetValue }],
          },
        ]}>
        <View style={{ position: 'relative', flex: 1 }}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
}

// For multiple Buttons...
const TabButton = ({ currentTab, setCurrentTab, title, route, icon }) => {
  const navigator = useNavigation();
  const { logout } = useAuth();

  return (

    <TouchableOpacity onPress={() => {
      if (route == "LogOut") {
        logout()
      } else {
        navigator.navigate({ name: route })
        setCurrentTab(route)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == route ? Colors.active : '#fff',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>
        <MenuIcon name={icon} color={currentTab == route ? "#fff" : Colors.active} />
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          paddingLeft: 15,
          fontFamily: Font["poppins-semiBold"],
          color: currentTab == route ? "#fff" : Colors.active
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const MenuIcon = ({ name, color }) => {
  switch (name) {
    case 'home':
      return <Ionicons name="home" size={21} color={color} />
    case 'chatbox-ellipses':
      return <Ionicons name="chatbox-ellipses" size={21} color={color} />
    case 'add-circle':
      return <Ionicons name="add-circle" size={21} color={color} />
    case 'body-outline':
      return <Ionicons name="body-outline" size={21} color={color} />
    case 'pulse-outline':
      return <Ionicons name="pulse-outline" size={21} color={color} />
    case 'stats-chart-outline':
      return <Ionicons name="stats-chart-outline" size={21} color={color} />
    case 'soccer-field':
      return <MaterialCommunityIcons name="soccer-field" size={21} color={color} />
    case 'file-tray-stacked':
      return <Ionicons name="file-tray-stacked" size={21} color={color} />
    default:
      return <Ionicons name="log-out" size={21} color={color} />
      break;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  hiddenBodyContainer: {
    backgroundColor: '#585858',
    position: 'absolute',
    zIndex: 100,
    top: 0,
    bottom: 0,
    opacity: 0.4,
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    justifyContent: 'flex-start',
    padding: 15,
  },
  tabButtonsContainer: {
    flexGrow: 1,
    marginTop: 20,
  },
  overlayView: {
    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 10,
    overflow: 'hidden',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // position: 'relative',
//     // alignItems: 'flex-start',
//     // justifyContent: 'flex-start',
//   },
// });

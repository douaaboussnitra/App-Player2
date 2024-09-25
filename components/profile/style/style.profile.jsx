import { Platform, StyleSheet } from "react-native";
import { getFullHeight } from "../../utils/DimensionsUtil";
import Colors from "../../../constants/Colors";

const ProfileStyles = StyleSheet.create({
  actionPlusContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? '10%' : '6%',
    right: Platform.OS === 'ios' ? '5%' : '5%',
  },
  scrollContainer: {
    paddingBottom: 35
  },
  actionPlus: {
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 40,
    elevation: 10, // For Android
    shadowColor: '#D6E1F3', // For iOS
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderColor: 'white',
    borderWidth: 2
  },
  editIcon: {
    position: 'absolute',
    left: 10,
    top: 10
  },
  destroyIcon: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  textInfo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#22272D'
  },
  usersContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  userContainer: {
    width: "50%",
    paddingHorizontal: 4,
    paddingVertical: 4
  },
  userBlockContainer: {
    backgroundColor: '#84AFA0',
    borderColor: '#fff',
    borderWidth: 2,
    width: "100%",
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    position: 'relative'
  },
  userBody: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userImage: {
    width: "20%",
    backgroundColor: 'blue',
    height: getFullHeight() / 8,
    width: getFullHeight() / 8,
    borderRadius: 70,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default ProfileStyles;
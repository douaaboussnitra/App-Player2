import { Platform, StyleSheet } from "react-native";
import { getFullHeight } from "../../utils/DimensionsUtil";
import Colors from "../../../constants/Colors";

const PerformanceStyles = StyleSheet.create({
  actionPlusContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? '10%' : '6%',
    right: Platform.OS === 'ios' ? '5%' : '5%',
  },
  actionPlus: {
    backgroundColor: Colors.performancePalette.primary,
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
  blockContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: '#99A9BB',
    borderColor: '#005B00',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 4
  },
  fullname: {
    marginLeft: 4,
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold'
  },
  playerInfo: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerValue: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    position: 'relative',
    paddingVertical: 8,
    paddingTop: 20,
    width: '50%' // Adjust width calculation
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  blockHeader: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    position: 'absolute',
    zIndex: 3,
    width: 100,
    top: 4,
    left: 40, // Set the left position to 0
    right: 0, // Set the right position to 0
    marginLeft: 'auto', // Push the element to the right
    marginRight: 'auto', // Push the element to the left
    borderWidth: 4,
    borderColor: 'white',
    flexDirection: 'row'
  },
  blockBorder: {
    borderWidth: 4,
    borderColor: Colors.primary,
    borderRadius: 10,
    width: '100%',
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  blockBody: {
    marginTop: 20,
    width: '100%',
    height: getFullHeight() / 4.4,
    paddingHorizontal: 4
  },
  shadow: {
    shadowColor: '#99BD99',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  }
})
export default PerformanceStyles;
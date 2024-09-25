import { Platform, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const NotifyStyles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
  },
  actionContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 10
  },
  actionIcon: {
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 30
  },
  typeContainer: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 10
  },
  FilterItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6
  },
  FilterContainer: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    marginVertical: 4,
    marginTop: 15
  },
  scrollContainer: {
    paddingBottom: 35
  },
  actionPlusContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? '10%' : '6%',
    right: Platform.OS === 'ios' ? '5%' : '5%',
  },
  actionPlus: {
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 40,
    elevation: 10, // For Android
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderColor: 'white',
    borderWidth: 2
  },
  listBodyText: {
    fontWeight: 'bold',
    color: '#B7A800'
  },
  listBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: 4,
    left: 10,
    borderRadius: 2,
    paddingVertical: 4,
    width: '100%',
  },
  listComment: {
    paddingVertical: 10,
    borderRadius: 5
  },
  listContainerBlock: {
    backgroundColor: '#E7ECEE',
    paddingVertical: 20,
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    elevation: 10, // For Android
    shadowColor: '#D6E1F3', // For iOS
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
})
export default NotifyStyles;
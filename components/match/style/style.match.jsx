import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { getFullHeight, getFullWidth } from "../../utils/DimensionsUtil";
const { width, height } = Dimensions.get('window');
const MatchStyles = StyleSheet.create({
  playersRemplacementContainer: {
    width: '100%',
    height: 65,
    marginTop: 5,
    backgroundColor: '#D7DADC',
    justifyContent: 'center',
    alignItems: 'center'

  },
  playersRemplacementBlockScroll: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  playersBlockContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '71%',
    marginTop: 25,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  playersRemplacementBlock: {
    justifyContent: 'center',
    width: 50,
    marginHorizontal: 10,
    marginVertical: 10,

  },
  playerImageBlack: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    width: 50,
    position: 'absolute'
  },
  playerImage: {
    width: 40,
    height: 40,
  },
  systemPlayContainer: {
    backgroundColor: '#1E4E19',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 20,
    position: 'absolute',
    zIndex: 10,
    borderColor: 'white',
    borderWidth: 2,
    top: -36,
    marginBottom: 5
  },
  playersAbsContainer: {
    height: '100%',
    width: '100%',
  },

  playersBlock: {
    position: 'relative',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderColor: '#1E4E19',
  },
  playerClubImage: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  playersContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 8
  },
  playersFilterClubTextActive: {
    color: 'white',
    fontWeight: 'bold'
  },
  playersFilterClubText: {
    color: 'black',
    fontWeight: 'bold'
  },
  playersFilterClubActive: {
    backgroundColor: 'black',
  },
  playersFilterClub: {
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    width: '40%',
    justifyContent: 'center',
    height: 30,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  playersFilter: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContent: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12
  },
  titleContainer: {
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 5,
    borderRadius: 4
  },
  clubResult: {
    width: 15,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clubResultContainer: {
    flexDirection: 'row',
    width: '12%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clubName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '50%'
  },
  clubImage: {
    width: 45,
    height: 45,
    position: 'absolute',
  },
  clubImageRight: {
    left: -20
  },
  clubImageLeft: {
    right: -20
  },
  clubsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: '13%',
  },
  clubBlockLeft: {
    borderTopEndRadius: 50,
    borderBottomEndRadius: 50,
  },
  clubBlockRight: {
    borderTopStartRadius: 50,
    borderBottomStartRadius: 50,
  },
  clubBlock: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  clubContainer: {
    width: '35%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  container: {
    height: getFullHeight(),
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  txt: {
    fontSize: width > 440 ? 20 : 16,
    color: 'gray',
  },
  playerNum: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: width > 440 ? 21 : 16,
    backgroundColor: 'black',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 6,
    marginTop: -5,
  },
  terrainBgContainer: {
    marginTop: 20,
    flex: 1,
    position: 'relative',
    minHeight: height - 250,
    height: '100%',
  },
  terrainBg: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },

  remplacementsContainer: {
    marginTop: 10,
  },
  remplacementsBtnAdd: {
    flexDirection: 'row',
  },
  iconAdd: {
    backgroundColor: Colors.matchPalette.primary,
    color: '#fff',
    width: width > 440 ? 32 : 25,
    height: width > 440 ? 32 : 25,
    borderRadius: width > 440 ? 32 / 2 : 25 / 2,
    textAlign: 'center',
    marginRight: 8,
    paddingTop: '1%',
  },

  shirtImg: {
    width: width > 440 ? 72 : 45,
    height: width > 440 ? 72 : 45,
    position: 'absolute',
    transform: [
      { translateX: width > 440 ? -36 : -22.5 },
      { translateY: width > 440 ? -36 : -22.5 },
    ],
  },
  goalKeeper: {
    left: '50%',
    bottom: 0,
  },
  //   4 - 3 - 3
  player4331: {
    left: '35%',
    top: '75%',
  },
  player4332: {
    left: '65.8%',
    top: '75%',
  },
  player4333: {
    left: '15%',
    top: '71.5%',
  },
  player4334: {
    left: '85%',
    top: '71.5%',
  },
  player4335: {
    left: '50%',
    top: '50%',
  },
  player4336: {
    left: '11%',
    top: '50%',
  },
  player4337: {
    left: '89%',
    top: '50%',
  },
  player4338: {
    left: '10%',
    top: '22%',
  },
  player4339: {
    left: '90%',
    top: '22%',
  },
  player43310: {
    left: '50%',
    top: '15%',
  },

  //   4 - 2 - 2
  player4421: {
    left: '35%',
    top: '75%',
  },
  player4422: {
    left: '65%',
    top: '75%',
  },
  player4423: {
    left: '15%',
    top: '75%',
  },
  player4424: {
    left: '85%',
    top: '75%',
  },
  player4425: {
    left: '35%',
    top: '50%',
  },
  player4426: {
    left: '15%',
    top: '50%',
  },
  player4427: {
    left: '85%',
    top: '50%',
  },
  player4428: {
    left: '65%',
    top: '50%',
  },
  player4429: {
    left: '35%',
    top: '20%',
  },
  player44210: {
    left: '65%',
    top: '20%',
  },

  //   4 - 2 - 2 d
  player442d1: {
    left: '35%',
    top: '75%',
  },
  player442d2: {
    left: '65%',
    top: '75%',
  },
  player442d3: {
    left: '15%',
    top: '75%',
  },
  player442d4: {
    left: '85%',
    top: '75%',
  },
  player442d5: {
    left: '50%',
    top: '63%',
  },
  player442d6: {
    left: '25%',
    top: '50%',
  },
  player442d7: {
    left: '75%',
    top: '50%',
  },
  player442d8: {
    left: '50%',
    top: '38%',
  },
  player442d9: {
    left: '33%',
    top: '10%',
  },
  player442d10: {
    left: '66%',
    top: '10%',
  },

  //   4 - 2 - 2
  player4241: {
    left: '35%',
    top: '75%',
  },
  player4242: {
    left: '65%',
    top: '75%',
  },
  player4243: {
    left: '15%',
    top: '75%',
  },
  player4244: {
    left: '85%',
    top: '75%',
  },
  player4245: {
    left: '35%',
    top: '50%',
  },
  player4246: {
    left: '65%',
    top: '50%',
  },
  player4247: {
    left: '35%',
    top: '20%',
  },
  player4248: {
    left: '65%',
    top: '20%',
  },
  player4249: {
    left: '15%',
    top: '20%',
  },
  player42410: {
    left: '85%',
    top: '20%',
  },

  //   4 - 5 - 1
  player4511: {
    left: '35%',
    top: '75%',
  },
  player4512: {
    left: '65%',
    top: '75%',
  },
  player4513: {
    left: '15%',
    top: '75%',
  },
  player4514: {
    left: '85%',
    top: '75%',
  },
  player4515: {
    left: '35%',
    top: '50%',
  },
  player4516: {
    left: '50%',
    top: '50%',
  },
  player4517: {
    left: '65%',
    top: '50%',
  },
  player4518: {
    left: '15%',
    top: '50%',
  },
  player4519: {
    left: '85%',
    top: '50%',
  },
  player45110: {
    left: '50%',
    top: '15%',
  },

  //   4 - 1 - 3 - 2
  player41321: {
    left: '35%',
    top: '75%',
  },
  player41322: {
    left: '50%',
    top: '65%',
  },
  player41323: {
    left: '65%',
    top: '75%',
  },
  player41324: {
    left: '15%',
    top: '75%',
  },
  player41325: {
    left: '85%',
    top: '75%',
  },
  player41326: {
    left: '50%',
    top: '50%',
  },
  player41327: {
    left: '35%',
    top: '50%',
  },
  player41328: {
    left: '65%',
    top: '50%',
  },
  player41329: {
    left: '33%',
    top: '10%',
  },
  player413210: {
    left: '66%',
    top: '10%',
  },

  //   4 - 1 - 4 - 1
  player41411: {
    left: '35%',
    top: '75%',
  },
  player41412: {
    left: '65%',
    top: '75%',
  },
  player41413: {
    left: '15%',
    top: '75%',
  },
  player41414: {
    left: '85%',
    top: '75%',
  },
  player41415: {
    left: '35%',
    top: '50%',
  },
  player41416: {
    left: '50%',
    top: '63%',
  },
  player41417: {
    left: '65%',
    top: '50%',
  },
  player41418: {
    left: '15%',
    top: '50%',
  },
  player41419: {
    left: '85%',
    top: '50%',
  },
  player414110: {
    left: '50%',
    top: '15%',
  },

  //   4 - 1 - 2 - 3
  player41231: {
    left: '35%',
    top: '75%',
  },
  player41232: {
    left: '65%',
    top: '75%',
  },
  player41233: {
    left: '15%',
    top: '75%',
  },
  player41234: {
    left: '85%',
    top: '75%',
  },
  player41235: {
    left: '50%',
    top: '63%',
  },
  player41236: {
    left: '35%',
    top: '50%',
  },
  player41237: {
    left: '65%',
    top: '50%',
  },
  player41238: {
    left: '10%',
    top: '15%',
  },
  player41239: {
    left: '90%',
    top: '15%',
  },
  player412310: {
    left: '50%',
    top: '15%',
  },

  //   4 - 2 - 1 - 3
  player42131: {
    left: '35%',
    top: '75%',
  },
  player42132: {
    left: '65%',
    top: '75%',
  },
  player42133: {
    left: '15%',
    top: '70%',
  },
  player42134: {
    left: '85%',
    top: '70%',
  },
  player42135: {
    left: '50%',
    top: '35%',
  },
  player42136: {
    left: '35%',
    top: '50%',
  },
  player42137: {
    left: '65%',
    top: '50%',
  },
  player42138: {
    left: '10%',
    top: '15%',
  },
  player42139: {
    left: '90%',
    top: '15%',
  },
  player421310: {
    left: '50%',
    top: '15%',
  },

  //   4 - 2 - 3 - 1
  player42311: {
    left: '35%',
    top: '75%',
  },
  player42312: {
    left: '65%',
    top: '75%',
  },
  player42313: {
    left: '15%',
    top: '70%',
  },
  player42314: {
    left: '85%',
    top: '70%',
  },
  player42315: {
    left: '50%',
    top: '35%',
  },
  player42316: {
    left: '35%',
    top: '50%',
  },
  player42317: {
    left: '65%',
    top: '50%',
  },
  player42318: {
    left: '10%',
    top: '25%',
  },
  player42319: {
    left: '90%',
    top: '25%',
  },
  player423110: {
    left: '50%',
    top: '15%',
  },

  //   4 - 3 - 2 - 1
  player43211: {
    left: '35%',
    top: '75%',
  },
  player43212: {
    left: '65%',
    top: '75%',
  },
  player43213: {
    left: '15%',
    top: '70%',
  },
  player43214: {
    left: '85%',
    top: '70%',
  },
  player43215: {
    left: '50%',
    top: '50%',
  },
  player43216: {
    left: '35%',
    top: '50%',
  },
  player43217: {
    left: '65%',
    top: '50%',
  },
  player43218: {
    left: '35%',
    top: '33%',
  },
  player43219: {
    left: '65%',
    top: '33%',
  },
  player432110: {
    left: '50%',
    top: '15%',
  },

  //   4 - 3 - 1 - 2
  player43121: {
    left: '35%',
    top: '75%',
  },
  player43122: {
    left: '65%',
    top: '75%',
  },
  player43123: {
    left: '15%',
    top: '70%',
  },
  player43124: {
    left: '85%',
    top: '70%',
  },
  player43125: {
    left: '50%',
    top: '50%',
  },
  player43126: {
    left: '35%',
    top: '50%',
  },
  player43127: {
    left: '65%',
    top: '50%',
  },
  player43128: {
    left: '50%',
    top: '33%',
  },
  player43129: {
    left: '35%',
    top: '15%',
  },
  player431210: {
    left: '65%',
    top: '15%',
  },

  //   4 - 4 - 1 - 1
  player44111: {
    left: '35%',
    top: '75%',
  },
  player44112: {
    left: '65%',
    top: '75%',
  },
  player44113: {
    left: '15%',
    top: '75%',
  },
  player44114: {
    left: '85%',
    top: '75%',
  },
  player44115: {
    left: '35%',
    top: '50%',
  },
  player44116: {
    left: '50%',
    top: '33%',
  },
  player44117: {
    left: '65%',
    top: '50%',
  },
  player44118: {
    left: '15%',
    top: '50%',
  },
  player44119: {
    left: '85%',
    top: '50%',
  },
  player441110: {
    left: '50%',
    top: '15%',
  },

  //   3 -  5 - 2
  player3521: {
    left: '50%',
    top: '75%',
  },
  player3522: {
    left: '35%',
    top: '75%',
  },
  player3523: {
    left: '65%',
    top: '75%',
  },
  player3524: {
    left: '35%',
    top: '50%',
  },
  player3525: {
    left: '50%',
    top: '50%',
  },
  player3526: {
    left: '65%',
    top: '50%',
  },
  player3527: {
    left: '15%',
    top: '50%',
  },
  player3528: {
    left: '85%',
    top: '50%',
  },
  player3529: {
    left: '35%',
    top: '15%',
  },
  player35210: {
    left: '65%',
    top: '15%',
  },

  //   3 -  4 - 3
  player3431: {
    left: '50%',
    top: '75%',
  },
  player3432: {
    left: '35%',
    top: '75%',
  },
  player3433: {
    left: '65%',
    top: '75%',
  },
  player3434: {
    left: '35%',
    top: '50%',
  },
  player3435: {
    left: '65%',
    top: '50%',
  },
  player3436: {
    left: '15%',
    top: '50%',
  },
  player3437: {
    left: '85%',
    top: '50%',
  },
  player3438: {
    left: '10%',
    top: '15%',
  },
  player3439: {
    left: '90%',
    top: '15%',
  },
  player34310: {
    left: '50%',
    top: '15%',
  },

  //   3 -  4 - 1 - 2
  player34121: {
    left: '50%',
    top: '75%',
  },
  player34122: {
    left: '35%',
    top: '75%',
  },
  player34123: {
    left: '65%',
    top: '75%',
  },
  player34124: {
    left: '35%',
    top: '50%',
  },
  player34125: {
    left: '50%',
    top: '32%',
  },
  player34126: {
    left: '65%',
    top: '50%',
  },
  player34127: {
    left: '15%',
    top: '50%',
  },
  player34128: {
    left: '85%',
    top: '50%',
  },
  player34129: {
    left: '35%',
    top: '15%',
  },
  player341210: {
    left: '65%',
    top: '15%',
  },

  //   3 -  4 - 1 - 2
  player33221: {
    left: '50%',
    top: '75%',
  },
  player33222: {
    left: '35%',
    top: '75%',
  },
  player33223: {
    left: '65%',
    top: '75%',
  },
  player33224: {
    left: '50%',
    top: '63%',
  },
  player33225: {
    left: '35%',
    top: '63%',
  },
  player33226: {
    left: '65%',
    top: '63%',
  },
  player33227: {
    left: '35%',
    top: '32%',
  },
  player33228: {
    left: '65%',
    top: '32%',
  },
  player33229: {
    left: '35%',
    top: '15%',
  },
  player332210: {
    left: '65%',
    top: '15%',
  },

  //   5 -  3 - 2
  player5321: {
    left: '35%',
    top: '75%',
  },
  player5322: {
    left: '50%',
    top: '75%',
  },
  player5323: {
    left: '65%',
    top: '75%',
  },
  player5324: {
    left: '15%',
    top: '75%',
  },
  player5325: {
    left: '85%',
    top: '75%',
  },
  player5326: {
    left: '50%',
    top: '50%',
  },
  player5327: {
    left: '11%',
    top: '50%',
  },
  player5328: {
    left: '89%',
    top: '50%',
  },
  player5329: {
    left: '35%',
    top: '15%',
  },
  player53210: {
    left: '65%',
    top: '15%',
  },

  //   5 -  4 - 1
  player5411: {
    left: '35%',
    top: '75%',
  },
  player5412: {
    left: '50%',
    top: '75%',
  },
  player5413: {
    left: '65%',
    top: '75%',
  },
  player5414: {
    left: '15%',
    top: '75%',
  },
  player5415: {
    left: '85%',
    top: '75%',
  },
  player5416: {
    left: '15%',
    top: '50%',
  },
  player5417: {
    left: '35%',
    top: '50%',
  },
  player5418: {
    left: '65%',
    top: '50%',
  },
  player5419: {
    left: '85%',
    top: '50%',
  },
  player54110: {
    left: '50%',
    top: '15%',
  },

  //   5 -  2 - 3
  player5231: {
    left: '35%',
    top: '75%',
  },
  player5232: {
    left: '50%',
    top: '75%',
  },
  player5233: {
    left: '65%',
    top: '75%',
  },
  player5234: {
    left: '15%',
    top: '75%',
  },
  player5235: {
    left: '85%',
    top: '75%',
  },
  player5236: {
    left: '35%',
    top: '50%',
  },
  player5237: {
    left: '65%',
    top: '50%',
  },
  player5238: {
    left: '15%',
    top: '15%',
  },
  player5239: {
    left: '85%',
    top: '15%',
  },
  player52310: {
    left: '50%',
    top: '15%',
  },
});

export default MatchStyles;
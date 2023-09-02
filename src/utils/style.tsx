import {StyleSheet} from 'react-native';
import {FONT, WARNA, SIZE, RADIUS, SPASI} from './theme';

const StyleComponent = StyleSheet.create({
  wrapper: {},

  // ~ Form Input Component
  formContainerInputText: {
    margin: 5,
  },
  formBoxInputText: {
    marginHorizontal: 20,
    paddingHorizontal: 14,
    marginTop: 5,
    marginBottom: 16,
    borderWidth: 0.6,
    borderRadius: RADIUS.radius_4,
    backgroundColor: WARNA.White,
    elevation: 1.4,
    flexDirection: 'row',
  },
  labelInputText: {
    marginHorizontal: 20,
    marginBottom: 8,
    fontSize: SIZE.size_16,
    fontWeight: 'bold',
    color: WARNA.Primary,
  },
  styleInputText: {
    width: '100%',
    fontSize: SIZE.size_14,
    fontFamily: FONT.poppins_medium,
  },

  // ~ Feature Component ~ //
  boxFeature: {
    width: '22%',
    height: 100,
    aspectRatio: 1,
    backgroundColor: WARNA.White,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    borderRadius: RADIUS.radius_4,
    marginBottom: SPASI.spasi_15,
  },
  textBoxFeature: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: WARNA.DarkGrey,
    fontFamily: FONT.poppins_regular,
    fontSize: SIZE.size_10,
  },
  iconBoxFeature: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: WARNA.DarkGrey,
    marginBottom: SPASI.spasi_4,
    marginTop: SPASI.spasi_10,
    fontSize: SIZE.size_24,
  },

  // ~ Navigator Component ~ //
  activeTabBackgroundNavigator: {
    color: WARNA.Primary,
    borderRadius: SPASI.spasi_18 * 10,
  },

  // ~ Slider Banner Component ~ //
  sliderBannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  imageBanner: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },

  // ~ Button Component ~ //
  buttonPrimary: {
    alignItems: 'center',
    backgroundColor: WARNA.Primary,
    padding: 9,
    borderRadius: RADIUS.radius_4,
    marginTop: 30,
  },
  buttonSecondary: {
    alignItems: 'center',
    backgroundColor: WARNA.Primary,
    padding: 9,
    borderRadius: RADIUS.radius_4,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: FONT.poppins_medium,
    fontSize: SIZE.size_12,
  },
  containerBtn: {
    display: 'flex',
    width: '70%',
  },

  // ~ Slider Schedule Component ~ //
  containerTopSchedule: {
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  textContainerSchedule: {
    marginLeft: 10,
  },
  textTopBarSchedule: {
    color: WARNA.Primary,
    fontFamily: FONT.poppins_semibold,
    fontSize: SIZE.size_14,
  },
  textBotBarSchedule: {
    color: WARNA.Primary,
    fontFamily: FONT.poppins_regular,
    fontSize: SIZE.size_14,
  },
  containerShowAll: {
    marginLeft: 'auto',
  },
  textShowAll: {
    color: WARNA.Primary,
    fontFamily: FONT.poppins_semibold,
    fontSize: SIZE.size_14,
  },
  textBoxContainerActive: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  textBoxSecondContainerActive: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  boxActiveSchedule: {
    backgroundColor: WARNA.Primary,
    width: '95%',
    height: 71,
    marginLeft: 7,
    borderRadius: RADIUS.radius_4,
  },
  secondBoxActiveSchedule: {
    position: 'absolute',
    backgroundColor: WARNA.Secondary,
    width: '100%',
    height: 40,
    top: 69,
    borderBottomLeftRadius: RADIUS.radius_4,
    borderBottomRightRadius: RADIUS.radius_4,
  },
  textActiveBoxBold: {
    fontFamily: FONT.poppins_bold,
    color: WARNA.White,
  },
  textActiveBoxRegular: {
    fontFamily: FONT.poppins_regular,
    color: WARNA.White,
  },
  boxNonActiveSchedule: {
    backgroundColor: WARNA.WhiteMate,
    width: '95%',
    height: 71,
    marginLeft: 7,
    borderRadius: RADIUS.radius_4,
  },
  textBoxContainerNonActive: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  textNonActiveBoxBold: {
    fontFamily: FONT.poppins_bold,
    color: WARNA.Primary,
  },
  textNonActiveBoxRegular: {
    fontFamily: FONT.poppins_regular,
    color: WARNA.Primary,
  },
  secondBoxNonActiveSchedule: {
    position: 'absolute',
    backgroundColor: WARNA.WhiteMateDark,
    width: '100%',
    height: 40,
    top: 69,
    borderBottomLeftRadius: RADIUS.radius_4,
    borderBottomRightRadius: RADIUS.radius_4,
  },
  textBoxSecondContainerNonActive: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  // ~ END Schedule Component ~ //
});

const StyleScreen = StyleSheet.create({
  // ~ Home Screen Style ~ //
  containerHome: {
    backgroundColor: '#F5FFF7',
    display: 'flex',
    flex: 1,
  },
  topBarHome: {
    width: '100%',
    height: 80,
    display: 'flex',
    paddingVertical: 25,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
  },
  textContainerHome: {
    marginLeft: 10,
  },
  textTopBarHome: {
    color: WARNA.Primary,
    fontFamily: FONT.poppins_semibold,
    fontSize: SIZE.size_12,
  },
  textBotBarHome: {
    color: WARNA.Primary,
    fontFamily: FONT.poppins_semibold,
    fontSize: SIZE.size_14,
  },
  iconTopHome: {
    marginLeft: 'auto',
  },
  containerFeatureHome: {
    display: 'flex',
    justifyContent: 'space-between',
    elevation: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    width: '100%',
    height: 210,
    backgroundColor: WARNA.White,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopLeftRadius: RADIUS.radius_15,
    borderTopRightRadius: RADIUS.radius_15,
  },
  containerScheduleHome: {
    elevation: 2,
    marginTop: 10,
    height: 210,
    backgroundColor: WARNA.White,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopLeftRadius: RADIUS.radius_15,
    borderTopRightRadius: RADIUS.radius_15,
  },

  // ~ Splash Screen ~ //
  imageLogoSplash: {
    width: 235,
    height: 145,
  },
  containerSplash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backContainerSplash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 500,
    backgroundColor: WARNA.WhiteRGBA50,
  },

  // ~ Login Screen ~ //
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSekolahLogin: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },

  //  ~ Onboarding Screen //
  containerOnboarding: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  imageLogoOnboarding: {
    width: 240,
    height: 240,
  },
});

export {StyleComponent, StyleScreen};

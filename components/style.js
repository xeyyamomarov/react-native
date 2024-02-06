import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  //  welcome page started
  welcome: {
    flex: 1,
    backgroundColor: '#0065FC',
  },
  container: {
    padding: 16,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
  },
  welcomeImg: {
    width: 350,
    height: 350,
  },
  signContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  signBtn: {
    paddingVertical: 16,
    backgroundColor: '#EFEFEF',
    borderRadius: 16,
    width: '45%',
  },
  signText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },

  // welcome page finished

  // login page started

  login: {
    flex: 1,
    // backgroundColor: '#0065FC',
  },
  back: {
    flexDirection: 'row',
    justifyContent: 'start',
  },
  loginHeader: {
    fontSize: 20,
    color: '#0065FC',
  },
  form: {
    marginTop: 40,
  },
  input: {
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    color: 'black',
    marginVertical: 10,
  },
  loginBtn: {
    textAlign: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: '#0065FC',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  signupRoute: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  // home page started

  homeContainer: {
    // flex:1,
    backgroundColor: '#EDEDED',
    paddingHorizontal: 8,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: '40%',
  },
  homeContent: {
    marginTop: 20,
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeBtn: {
    paddingVertical: 16,
    backgroundColor: '#0065FC',
    borderRadius: 16,
    width: '45%',
    alignItems: 'center',
  },
  homeBtnContent: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  healthStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  healthIcon: {
    backgroundColor: '#E4EDF9',
    padding: 12,
    borderRadius: 16,
  },

  // card container
  cardContainer: {},
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardBox: {
    backgroundColor: '#EFEFEF',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  cardImg: {
    width: 150,
    height: 150,
  },
  openBtn: {
    padding: 8,
    backgroundColor: '#0065FC',
  },
  openBtnText: {
    fontSize: 20,
    color: 'white',
  },
});

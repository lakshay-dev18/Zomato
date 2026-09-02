import { StyleSheet } from 'react-native';
import Color from '../../../shared/theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },

  containerNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 20,
  },

  backButton: {
    marginTop:26
  },

  text: {
    fontFamily: 'Segoe UI',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    paddingTop: 25
  },
  textNumber: {
    fontFamily: 'Segoe UI',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
  },
  otpBox:{
    alignItems:'center',
    width:28,
    height:35,
    borderWidth:0.5,
    borderRadius:3,
    color:Color.background,
    justifyContent:'center'
  },
  containerNumber: {
    paddingHorizontal: 25,
    paddingLeft: 48,
    },
    otpBoxContainer: {
        marginTop: -10,
        paddingHorizontal:80
    },
    otpTimer:{
        alignItems:'center',
        paddingBottom:50
    },
    otpTimerTop:{
        flex:1
    },
    otpTimerButton:{
        flexDirection: 'row',
        paddingTop:15
    },
    otpTimerText:{
        fontFamily: 'Segoe UI',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'center',
        paddingHorizontal:10
    },
    otpTimerButtonText:{
        fontFamily: 'Segoe UI',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'center'

    },
    resendDisabled:{
        color:'#C4C4C4'
    },
    resendActive:{
        color:'#000000'
    }
});

export default styles;
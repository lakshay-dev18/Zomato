import {StyleSheet} from 'react-native'
import Color from '../../../shared/theme/Colors'

const styles = StyleSheet.create({
    container:{ flex:1, paddingHorizontal:32, },
    skipButtonContainer:{ alignItems:'flex-end', marginTop:50 },
    top:{ flex:1, marginBottom: 16, },
    phoneContainer: { alignItems: 'center', justifyContent: 'center', },
    countryCode: { fontSize: 22, marginLeft: -160, position: 'absolute', zIndex: 1, marginTop:-20 },
    inputField:{ width: '100%', fontSize: 22, height:59, borderWidth:1, backgroundColor:'white', borderRadius:8, marginBottom: 16, paddingLeft:62 ,paddingBottom:14 },   
    sendOtpButton:{ backgroundColor:'black',  padding:18},
    sendOtpButtonText:{ color: Color.button, fontFamily: "Segoe UI", fontSize: 20, letterSpacing: 0, textAlign: "center", },
    orContainer: { flexDirection: "row", alignItems: "center", width: "100%", paddingTop:34, marginBottom:34},
    line: { flex: 1, height: 1, backgroundColor: Color.line, },
    text: { marginHorizontal: 12, fontSize: 15, color: Color.text },
    emailButton:{ backgroundColor:'white', marginBottom: 16, flexDirection: "row", alignItems: 'center', justifyContent: 'center', position: 'relative', padding:12 },
    emailButtonText:{ fontFamily: "Segoe UI", fontSize: 18, letterSpacing: 0, textAlign: 'center', marginLeft: 30, },
    emailButtonLogo:{ marginLeft:-20 },
    linkContainer:{ flexDirection: 'row', color:Color.button, justifyContent:'center' },
    linkContainerText:{ color:Color.button, fontSize:14 },
    link:{ textDecorationLine: 'underline', color:Color.button, fontSize:14 },
    linkContainer2:{ flexDirection: 'row', marginBottom: 26, gap:5, },
    skipButton:{ backgroundColor:Color.buttonBg, width:65, height:35, borderRadius:20, },
    skipButtonText:{ color:Color.text , fontSize:15, padding:3,paddingHorizontal:11,backgroundColor:'#00000078',borderRadius:15},
    rowButton:{ flexDirection:'row', gap:11, marginBottom:22 },
    facebook:{ paddingVertical:18, fontSize:19 },
    google:{paddingVertical:18, fontSize:19},
    facebookContainer:{flex:1, backgroundColor:Color.button , flexDirection:'row', borderRadius:8},
    googleContainer:{flex:1 , backgroundColor:Color.button, flexDirection:'row', borderRadius:8},
    Logo:{ paddingVertical:12, paddingHorizontal:8 }
})
export default styles;


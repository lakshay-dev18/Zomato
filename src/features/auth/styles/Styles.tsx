import {StyleSheet} from 'react-native'
import Color from '../../../shared/theme/Colors'

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:32,

    },
    skipButtonContainer:{
        position:'absolute',
        left:'90%',
        top:'6%',
    },
    top:{
        flex:1,
        marginBottom: 16,
    },
    phoneContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    countryCode: {
        fontSize: 22,
        marginRight: 5,
        position: 'absolute',
        zIndex: 1,
        paddingBottom:17,
        paddingRight:130
    },
    inputField:{
        width: '100%',
        fontSize: 22,
        textAlign: 'center',
        height:59,
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:8,
        marginBottom: 16,
        paddingLeft:40,
    },   
    sendOtpButton:{
        backgroundColor:'black',
        marginBottom: 16,
    },
    sendOtpButtonText:{
        color: Color.button,
        fontFamily: "Segoe UI",
        fontSize: 20,
        letterSpacing: 0,
        textAlign: "center",
    },
    orContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 16,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: Color.line,
    },

    text: {
        marginHorizontal: 12,
        fontSize: 16,
        color: Color.text
    },
    emailButton:{
        backgroundColor:'white',
        marginBottom: 16,
        flexDirection: "row",
        alignItems: 'center',      
        justifyContent: 'center',
        position: 'relative',
    },
    emailButtonText:{
        fontFamily: "Segoe UI",
        fontSize: 18,
        letterSpacing: 0,
        textAlign: 'center',
        marginLeft: 35,

    },
    emailButtonLogo:{
        position:'absolute',
        left:'5%'
    },
    fbButton:{
        backgroundColor:Color.button,
        width: '50%',
        height: 59,
        opacity: 1,
        borderRadius: 8,
        marginBottom: 16,
        flexDirection:'row',
    },
    fbButtonText:{
        fontFamily: 'Segoe UI',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0,
        left:'12%'
    },
    facebookButtonLogo:{
        position:'absolute',
        left:'10%'
    },
    googleButton:{
        width: '50%',
        height: 59,
        opacity: 1,
        borderRadius: 8,
        backgroundColor:Color.button,
        marginBottom: 16,
        flexDirection:'row'
    },
    googleButtonText:{
        fontFamily: 'Segoe UI',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'center',
        left:'12%'
    },
    googleButtonLogo:{
        position:'absolute',
        left:'10%'
    },
    buttonContainer:{
        flexDirection: "row",
        marginBottom: 16,
        gap:5
    },
    linkContainer:{
        flexDirection: 'row',
        color:Color.button,
        justifyContent:'center'
    },
    linkContainerText:{
        color:Color.button,
        fontSize:14
    },
    link:{
        textDecorationLine: 'underline',
        color:Color.button,
        fontSize:14
    },
    linkContainer2:{
        flexDirection: 'row',
        marginBottom: 16,
        gap:5,
    },
    
})
export default styles;


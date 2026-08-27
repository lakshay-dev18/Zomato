import {StyleSheet} from 'react-native'
import Color from '../../../shared/theme/Colors'

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:32,

    },
    top:{
        flex:1,
        marginBottom: 16,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countryCode: {
        fontSize: 16,
        marginRight: 5,
    },
    inputField:{
        width: '100%',
        fontSize: 16,
        textAlign: 'center',
        height:59,
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:8,
        marginBottom: 16,
    },   
    sendOtpButton:{
        backgroundColor:'black',
        marginBottom: 16,
    },
    sendOtpButtonText:{
        color: Color.button,
        fontFamily: "Segoe UI",
        fontSize: 18,
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
    },
    emailButtonText:{
        fontFamily: "Segoe UI",
        fontSize: 19,
        letterSpacing: 0,
        textAlign: 'center',

    },
    fbButton:{
        backgroundColor:Color.button,
        width: '50%',
        height: 59,
        opacity: 1,
        borderRadius: 8,
        marginBottom: 16,

    },
    fbButtonText:{
        fontFamily: 'Segoe UI',
        fontWeight: 400,
        fontSize: 19,
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'center'

    },
    googleButton:{
        width: '50%',
        height: 59,
        opacity: 1,
        borderRadius: 8,
        backgroundColor:Color.button,
        marginBottom: 16,

    },
    googleButtonText:{
        fontFamily: 'Segoe UI',
        fontWeight: 400,
        fontSize: 19,
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'center',

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
        color:Color.button
    },
    link:{
        textDecorationLine: 'underline',
        color:Color.button,
    },
    linkContainer2:{
        flexDirection: 'row',
        marginBottom: 16,
        gap:5,
    },
    
})
export default styles;


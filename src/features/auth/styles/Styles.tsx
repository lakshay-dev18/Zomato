import {StyleSheet} from 'react-native'
import Color from '../../../styles/Colors'

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:32,

    },
    top:{
        flex:1
    },
    inputField:{
        width: '100%',
        height:59,
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:8
    },
    primaryButton:{
        backgroundColor:'black'
    },
    primaryButtonText:{
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
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: Color.line,
    },

    text: {
        marginHorizontal: 12,
        fontSize: 16,
    },
})
export default styles;


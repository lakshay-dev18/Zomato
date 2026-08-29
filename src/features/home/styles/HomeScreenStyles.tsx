import{StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    topContainer:{
        flexDirection:'row',
    },
    locationLogoButton:{
        paddingTop: 62,
        paddingRight: 300,
        opacity: 1,

    },
    locationLogo:{
        width: 14,
        height: 21,
    },
    menuLogo:{
        width: 27,
        height: 21,
        opacity:1,
    },
    menuLogoContainer:{
        position:'absolute',
        paddingTop:64,
        left:'85%'
    },
    lineLogoContainer:{
        position:'absolute',
        paddingTop:65,
        paddingLeft:48
    },
    lineLogo:{
        width:'250%'
    },
    inputFieldContainer:{
        flexDirection:'row',
    },
    inputField:{
        borderWidth:1,
        borderRadius:8,
        width:'88%',
        top:'120%',
        left:'5%',
    },
    inputFieldText:{
        textAlign:'center'
    },
    searchIcon:{
        position:'absolute',
        top:'148%',
        left:'8%'
    },
    topRowContainer:{
        top:'10%'
    },
    maxIcon:{
        height:'20%',
        width:'100%',
    },
    discountContainer:{
        flexDirection:'row',
        gap:'5%',
        left:'2%',
        bottom:'2%',
    },
    offerIcon:{
        width:'45%',
        borderRadius:5
    },
    discountIcon:{
        width:'45%',
        borderRadius:5
    },
    text:{
        fontFamily: 'Segoe UI',
        fontSize: 20,
        letterSpacing: 0,
        left:'2%',
        top:'2%'
    },
    food:{
        top:'4%',
        width:'100%',
        height:'27%'
    },
    seeMoreContainer:{
        top:'6%',
        right:'3%'
    }
})
export default styles;




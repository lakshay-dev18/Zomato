import{StyleSheet} from 'react-native'
import Color from '../../../../src/shared/theme/Colors'

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor:Color.button },
    topContainer:{ flexDirection:'row', marginBottom:20 },
    locationLogoButton:{ paddingTop: 58, paddingLeft:14 },
    lineLogoContainer:{ position:'absolute', paddingTop:65, paddingLeft:48 },
    lineLogo:{ marginLeft:5, marginBottom:10, width: '65%', borderBottomWidth: 2, borderBottomColor: Color.border, borderStyle: 'dotted', },
    inputFieldContainer:{ flexDirection:'row', gap:25, marginBottom:30 },
    inputField:{ borderWidth:1, borderRadius:8, width:'88%', marginTop:15, marginLeft:16, paddingLeft:44, height:43 },
    inputFieldText:{ textAlign:'left' },
    searchIcon:{ position:'absolute', marginTop:25, marginLeft:30, opacity: 0.6 },
    text: { fontSize: 22, marginHorizontal: 12, fontWeight:700, fontFamily:'Segoe UI', marginBottom:10 },
    restaurantCount: { fontSize: 22, marginTop: 16, marginHorizontal: 20, fontFamily: 'Segoe UI', fontWeight: 700, letterSpacing: 0, marginLeft:10 },
    maxButton:{ borderWidth:0.5, width:55, height:35, marginLeft:10, borderRadius:8, justifyContent:'center' },
    maxButtonText:{ fontSize:12, fontFamily: 'Segoe UI', letterSpacing: 0, fontWeight: 800, textAlign:'center', },
    shieldCrownLogo:{ height:20, width:22, resizeMode:'contain' },
    proButton:{ flexDirection:'row', borderWidth:0.5, width:55, height:35, marginLeft:15, borderRadius:8, justifyContent:'center', paddingTop:8 },
    cuisinesButton:{ flexDirection:'row', borderWidth:0.5, width:64, height:35, marginLeft:15, borderRadius:8, paddingTop:8, justifyContent:'center', padding:10 },
    caretIcon:{ paddingTop:3 },
    popularButton:{ flexDirection:'row', borderWidth:0.5, width:60, height:35, marginLeft:15, borderRadius:8, justifyContent:'center', alignItems:'center' },
    offerContainer:{ flexDirection:'row', gap:15, marginLeft:12, marginTop: -10, },
    offerLogo:{ resizeMode:"contain", width:'46%', height:200 },
    categoryItem: { alignItems: 'center', justifyContent: 'center', margin: 4, width: 68, marginLeft:18, marginRight:-2 },
    categoryCircle: { width: 70, height: 70, borderRadius: 35, resizeMode: 'cover', },
    seeMoreButton:{ backgroundColor:Color.button, borderWidth:0.5, width:'95%', height:30, marginLeft:10, marginTop:20, paddingTop:8, justifyContent:'center', flexDirection:'row', borderRadius:9 },
    seeMoreText:{ textAlign:'center', fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 10, letterSpacing: 0, },
    chevronIcon:{ paddingTop:2, paddingLeft:2 },
    restaurantCard: { backgroundColor: Color.card, margin: 10, marginTop:24, borderRadius:20, shadowColor:Color.resend, shadowOpacity:0.15, elevation: 4, shadowOffset: { width: 0, height: 8 }, shadowRadius:6 },
    restaurantImage: { width: '100%', height: 200, resizeMode: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20, },
    restaurantName: { fontSize: 16, fontWeight: 400, fontFamily: 'Segoe UI', letterSpacing: 0, },
    restaurantCategory: { fontSize: 11, color: Color.category, fontFamily:'Segoe UI' ,},
    ratingBadge: { backgroundColor: 'green', borderRadius: 4, width:'15%', height:21, justifyContent:'center', textAlign:'center', },
    ratingText: { color: Color.card, fontSize: 12, fontWeight: 'bold', textAlign:'center' },
    priceText: { fontSize: 12, fontWeight:400, fontFamily:'Segoe UI', color: '#333', textAlign:'right', }   ,
    bottomRow: { flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 8, },
    ecoRow: { flexDirection: 'row', alignItems: 'center', flex: 1, },
    ecoText: { fontSize: 11, color: Color.eco, marginLeft: 4, flexShrink: 1, },
    safetyBadge: { paddingHorizontal: 6, paddingVertical: 2,flexDirection:'row' },
    maxImage:{ resizeMode:'cover', width:65, height:32, bottom:5, left:5, borderRadius:6 },
    restaurantInfoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10, },
    categoryPrice: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, },
    menuIcon:{ justifyContent:'space-between', width: 24, height: 22, marginLeft:40, marginTop:64, },
    line:{ height: 2, width: '100%', backgroundColor: 'black', borderRadius: 1, },
    arrowImage:{width:18, height:18},
    queryText:{justifyContent:'center', textAlign:'center', },
    queryContainer:{justifyContent:'center', textAlign:'center', marginTop:'100%'}
});export default styles;







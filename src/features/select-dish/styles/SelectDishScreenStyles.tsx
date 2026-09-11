import Color from "../../../../src/shared/theme/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({           
    transparentContainer:{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end', },
    container:{ height: '80%', backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden', },
    plantImage:{ resizeMode:'cover', width:'100%', height:200 },
    plantText:{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 16, letterSpacing: 0, marginLeft:15 },
    iconContainer:{ flexDirection:'row', marginTop:5, marginLeft:15, gap:10 },
    ratingIcon:{ resizeMode:"contain", width:110, height:16 },
    bestsellerButton:{ backgroundColor:Color.seller, borderWidth:1, borderColor:'red', borderRadius:4, width:50, height:20, justifyContent:'center', },
    bestsellerText:{ textAlign:'center', fontSize:8 },
    vegText:{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 11, letterSpacing: 0, marginLeft:15, marginTop:2 },
    readButton:{ position:'absolute', marginTop:260, marginLeft:58, },
    readButtonText:{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 12, letterSpacing: 0, },
    lineIcon:{ width:'100%', borderWidth:1, marginTop:20, opacity:0.25 },
    addText:{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 14, letterSpacing: 0, marginLeft:15 },
    selectionText:{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 12, letterSpacing: 0, marginLeft:15 },
    dataContainer:{ flexDirection:'row', marginLeft:15, marginTop:25, justifyContent: 'space-between', },
    vegIconContainer:{ flexDirection:'row', gap:10, },
    vegIcon:{ width:14, height:14 },
    nameText:{ marginTop:-2 },
    priceText:{ },
    priceContainer:{ flexDirection:'row', gap:7 , marginRight:19},
    protienText:{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 14, letterSpacing: 0, },
    optionsText:{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 12, letterSpacing: 0, },
    filterContainer:{ marginLeft:10, marginBottom:-8 },
    counterContainer:{ flexDirection:'row', marginLeft:15, marginTop:15,marginBottom:10, gap:15, borderWidth:1, width:87, height:40, paddingLeft:10, backgroundColor:Color.counter,},
    counterButton:{ fontSize:25, color:Color.counterButton },         
    counterText:{ fontSize:25 },
    addButton:{ marginLeft:20, backgroundColor:Color.primary, width:220, height: 42, borderRadius:4, justifyContent:'center' },
    addButtonText:{ color:Color.button, fontFamily: 'Segoe UI', fontWeight: 600, fontSize: 20, letterSpacing: 0, textAlign: 'center', },
    closeButton: { marginLeft:160, marginBottom:10, width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center', zIndex: 10, },
    modalOverlay: { flex: 1, justifyContent: 'flex-end', },
    transparentArea: { flex: 1, },           
    
})
export default styles;
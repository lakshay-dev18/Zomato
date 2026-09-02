import{View, Text, StyleSheet, Image} from 'react-native'
import{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../../shared/components/Buttons/CustomButton';
export default function EatHealthyScreen(){
    const[active,setactive]=useState('DELIVERY')
   return( 
    <View style={styles.container}>
      <View style={styles.icon}>
       <Ionicons name="chevron-back" size={24} /> 
      </View>
     <View style={styles.restaurantRow}>
      <View style={styles.restaurantInfoContainer}>
            <Text style={styles.restaurantNameText}>Eat Healthy</Text>
            <Text style={styles.restaurantDescription}>Healthy food, South Indian</Text>
            <Text style={styles.locationText}>Kukatpally, Hyderabad</Text>
            <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/max-safety.png')} style={styles.maxIcon}/>
      </View> 
      <View style={styles.iconContainer}>
            <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/delivery.png')} style={styles.deliveryIcon}/>
            <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/6_photos.png')} style={styles.deliveryIcon}/>
      </View>
      </View>
      <View style={styles.buttonGroup}>
        <CustomButton title='DELIVERY' onPress={()=>setactive('DELIVERY')}
        style={active==='DELIVERY'?styles.activeDelivery:styles.disableDelivery}
        textStyle={active==='DELIVERY'?styles.activeTextDelivery:styles.disableTextDelivery}
        />
        <CustomButton title='DINING' style={styles.disableDining} textStyle={styles.disableTextDelivery} />
        <CustomButton title='REVIEWS' style={styles.disableDining} textStyle={styles.disableTextDelivery} />
      </View>
      <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/mode-time-offer.png')} style={styles.modeIcon}/>
      <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/delivery-bike.png')} style={styles.bikeIcon}/>
      
    <View style={styles.menuButtonGroup}>
        <CustomButton title='Full Menu' onPress={()=>setactive('DELIVERY')}
        style={active==='DELIVERY'?styles.activeDelivery:styles.disableDelivery}
        textStyle={active==='DELIVERY'?styles.activeTextDelivery:styles.disableTextDelivery}
        />
        <CustomButton title='DINING' style={styles.disableDining} textStyle={styles.disableTextDelivery} />
    </View>    
    </View>
   )
}
const styles = StyleSheet.create({
    container:{ flex:1, },
    icon:{ paddingTop:50, marginLeft:10, },
    restaurantRow:{ flexDirection:'row', justifyContent: 'space-between' },
    restaurantInfoContainer:{ marginLeft:20, marginTop:15, marginHorizontal: 20, },
    restaurantNameText:{ fontFamily: 'Signika', fontWeight: 400, fontSize: 26, letterSpacing: 0, },
    restaurantDescription:{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 12, letterSpacing: 0, },
    locationText:{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: 10, letterSpacing: 0, },
    maxIcon:{ resizeMode:'contain', marginTop:5, opacity: 1, },
    iconContainer:{ marginTop:5, },
    deliveryIcon:{ resizeMode:'contain', height:50 },
    buttonGroup:{ marginTop:12, flexDirection:'row', marginHorizontal:10, width:'95%', backgroundColor:'#F0EBEB', borderRadius:5, height:50 },
    activeDelivery:{ backgroundColor:'#000000', width:'33%' ,height:50},
    disableDelivery:{},
    activeTextDelivery:{ color:'#FFFFFF', fontFamily:'Segoe UI' },
    disableTextDelivery:{ color:'#8C7B7B' },
    disableDining:{ width:'31%' ,height:50},
    disableReview:{ width:'31%' },
    modeIcon:{ resizeMode:'contain', width:'94%', marginLeft:12, height:40 },
    bikeIcon:{ marginTop:20, resizeMode:'contain', width:'92%', marginLeft:10,height:30 },
    menuButtonGroup:{}
})
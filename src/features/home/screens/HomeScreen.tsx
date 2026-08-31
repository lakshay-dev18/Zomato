import{View,Text, Image, ScrollView, FlatList} from 'react-native'
import CustomButton from '../../../shared/components/buttons/CustomButton'
import styles from '../../../../src/features/home/styles/HomeScreenStyles'
import InputField from '../../../../src/shared/components/input_field/InputField'

export default function HomeScreen(){
    return(
    <View style={styles.container}>
      <ScrollView  style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}>  
       <View style={styles.topContainer}> 
        <CustomButton icon={
            <Image source={require('../../../../assets/icons/location-icon.png')}
                style={styles.locationLogo}/>
           }
         style={styles.locationLogoButton}  />

       <View style={styles.lineLogoContainer}> 
        <Text style={styles.lineLogo}>..................................................................</Text>
       </View>     
       <View style={styles.menuLogoContainer}> 
        <Image source={require('../../../../assets/icons/menu-icon.png')}
            style={styles.menuLogo}/> 
       </View>
       </View>
       <View style={styles.inputFieldContainer}> 
        <Image source={require('../../../../assets/icons/search-icon.png')}
            style={styles.searchIcon}/> 
        <InputField title={'Restaurant name, cuisine, or a dish...'}
            style={styles.inputField}
            text={styles.inputFieldText}/>    
       </View>
       <View style={styles.topRowContainer}>
            <Image source={require('../../../../assets/icons/filter_bar.png')}
            style={styles.maxIcon}/>
        </View>
       <View style={styles.discountContainer}>
           <Image source={require('../../../../assets/icons/offer.png')}
                style={styles.offerIcon}/>
           <Image source={require('../../../../assets/icons/discounts.png')}
                style={styles.discountIcon}/>
        </View> 
        <Text style={styles.text}>Eat what makes you happy</Text>
        <Image source={require('../../../../assets/icons/food.png')}
          style={styles.food}
          resizeMode="contain"/>
        <View style={styles.seeMoreContainer}>
            <Image source={require('../../../../assets/icons/see-more.png')}
               style={styles.seeMore} />
        </View>
        <Text style={styles.restaurantCount}>396 restaurants around you</Text>
         
       </ScrollView>
    </View>
    )
}


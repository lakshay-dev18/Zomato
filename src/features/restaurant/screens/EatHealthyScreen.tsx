import{View, Text, Pressable, Image, ImageBackground, FlatList, ActivityIndicator} from 'react-native'
import{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../../shared/components/buttons/CustomButton';
import SwitchButton from '../../../../src/shared/components/switch_button/SwitchButton';
import InputField from '../../../shared/components/input_field/InputField';
import menuItems from "../data/data";
import styles from '../../../../src/features/restaurant/styles/EatHealthyScreenStyles'
import { router} from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import SelectDishScreen from '../../../../src/features/select-dish/screens/SelectDishScreen';
import OrderPlacedScreen from '../../../../src/features/order/screens/OrderPlacedScreen';


export default function EatHealthyScreen(){
    const[active,setactive]=useState('DELIVERY')
    const[menuactive,setmenuactive]=useState('Healthy')
    const [modalVisible, setModalVisible] = useState(false);
    const [modalorderVisible, setModalorderVisible] = useState(false);
    const [quantity, setQuantity] = useState(0)

  const fetchMenuItems = async () => {
      return menuItems;
    };

    const { data, isLoading, isError } = useQuery({
      queryKey: ['menuItems'],
      queryFn: fetchMenuItems,
    });

    if (isLoading) {
      return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }

    if (isError) {
      return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ color: 'red' }}>Something went wrong. Please try again.</Text>
        </View>
      );
    }

   return( 
    <View style={styles.container}>
      <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={ 
      <View>        
      <Pressable style={styles.icon}
        onPress={()=>router.back()}>
       <Ionicons name="chevron-back" size={24} /> 
      </Pressable>
     <View style={styles.restaurantRow}>
      <View style={styles.restaurantInfoContainer}>
            <Text style={styles.restaurantNameText}>Eat Healthy</Text>
            <Text style={styles.restaurantDescription}>Healthy food, South Indian</Text>
            <Text style={styles.locationText}>Kukatpally, Hyderabad</Text>
            <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/max-safety.png')} style={styles.maxIcon}/>
      </View> 
      <View style={styles.iconContainer}>
            <View style={styles.deliveryContainer}>
               <View style={styles.starContainer}>               
                <Text style={styles.numberText}>4.2</Text>
                <Ionicons name="star-outline" color={'#FFFFFF'} style={styles.starIcon}/>
               </View> 
                <Text style={styles.deliveryText}>DELIVERY</Text>
            </View>
            <ImageBackground
                source={require('../../../../assets/icons/eatHealthyScreenIcons/6_photos.png')}
                style={styles.deliveryIcon}
              >         
                <Text style={styles.text}>{'6\nphotos'}</Text>
              </ImageBackground>
      </View>

      </View>
      <View style={styles.buttonGroup}>
        <CustomButton title='DELIVERY' onPress={()=>setactive('DELIVERY')}
        style={active==='DELIVERY'?styles.activeDelivery:styles.disableDelivery}
        textStyle={active==='DELIVERY'?styles.activeTextDelivery:styles.disableTextDelivery}
        />
        <CustomButton title='DINING' style={styles.disableDining} textStyle={styles.disableTextDelivery}  />
        <CustomButton title='REVIEWS' style={styles.disableDining} textStyle={styles.disableTextDelivery} />
      </View>
      <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/mode-time-offer.png')} style={styles.modeIcon}/>

      <View style={styles.bikeContainer}>
        <Ionicons name='bicycle-outline' size={24} style={styles.bikeIcon}/>
        <Text style={styles.bikeIconText}>₹25 distance charge</Text> 
      </View>        
    <View style={styles.menuButtonGroup}>
        <CustomButton title='Full Menu' style={styles.disableDining} textStyle={styles.disableTextDelivery} />

        <Pressable
        onPress={() => setmenuactive('Healthy')}
        style={menuactive === 'Healthy' ? styles.activeHealthy : styles.disableHealthy}
        >
        <Text style={menuactive === 'Healthy' ? styles.activeTextHealthy : styles.disableTextHealthy}>
          Healthy
        </Text>

      {menuactive === 'Healthy' && (
        <View style={styles.underline} />
      )}
</Pressable>
    </View>
    <View style={styles.switchContainer}>
     <View style={styles.switchButtonContainer}>
       <SwitchButton label='veg'/> 
       <SwitchButton label='Egg'/> 
     </View>
      <View style={styles.searchFieldContainer}>
        <Ionicons name='search' size={20} color={'red'} style={styles.searchIcon}/> 
       <InputField title='Search' style={styles.searchField} text={styles.searchFieldText}/>
      </View> 
    </View>   

    <View style={styles.lineContainer}></View> 
    <View style={styles.recomendedContainer}>
      <Text style={styles.recomendedText}>Recommended</Text>  
      <Ionicons name="caret-up-outline" size={15}/>
    </View>
    </View>
   } 
   renderItem={({ item }) => (
  <View style={styles.menuCard}>
    <View style={styles.menuInfo}>
      <Text style={styles.menuName}>{item.name}</Text>
      <Text style={styles.menuText}>₹{item.price}</Text>
     <View style={styles.rowContainer}> 
      <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/rating.png')} style={styles.ratingIcon}/>
      <Text style={styles.mustText}>{item.tag}</Text>
     </View> 
      <Text style={styles.menuText}>[{item.category}] {item.description}</Text>
    </View>

    <View>
      <Image source={item.image} style={styles.menuImage} />
      {quantity === 0 ? (
                <Pressable onPress={() => setModalVisible(true)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>ADD +</Text>
                </Pressable>
            ) : (
              <View style={styles.inputRow}>
                    <Pressable onPress={()=>setQuantity(quantity-1)}>
                      <Text style={styles.inputButtonText}>-</Text>
                    </Pressable>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <Pressable onPress={()=>setQuantity(quantity+1)}>
                      <Text style={styles.inputButtonText}>+</Text>
                    </Pressable>
              </View>  
            )}
    </View>
  </View>
)}
  /> 
  <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/30_off.png')} style={styles.offIcon}/>
  {quantity===0? (
    null
  ):(
    <View style={styles.butContainer}>
      <Pressable
       style={styles.PlaceOrder}
        onPress={()=>setModalorderVisible(true)}  
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.quantityButton}>{quantity} ITEM</Text>
          <Text style={styles.cartButton}>View Cart </Text>
        </View>
        <Text style={styles.priceButton}>₹ 279 plus taxes</Text>
      </Pressable>
    </View>
  )
}  

    <SelectDishScreen
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAdd={(count) => {
                    setQuantity(count)
                    setModalVisible(false) 
                }}
        />
    <OrderPlacedScreen
          visible={modalorderVisible}
          onClose={() => setModalorderVisible(false)}
          initialQuantity={quantity}
        />
    </View>
   )
}

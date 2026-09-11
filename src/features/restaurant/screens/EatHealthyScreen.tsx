import{View, Text, Pressable, Image, ImageBackground, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native'
import{useState, useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';
import SwitchButton from '../../../../src/shared/components/switch_button/SwitchButton';
import InputField from '../../../shared/components/input_field/InputField';
import menuItems from "../data/data";
import styles from '../../../../src/features/restaurant/styles/EatHealthyScreenStyles'
import { router} from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import SelectDishScreen from '../../../../src/features/select-dish/screens/SelectDishScreen';
import OrderPlacedScreen from '../../../../src/features/order/screens/OrderPlacedScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

type MenuItem = {
  id: string;
  name: string;
  price: number;
  isVeg: boolean;
  rating: number;
  ratingCount: number;
  tag: string;
  category: string;
  description: string;
  image: any;
};

export default function EatHealthyScreen(){
    const[active,setactive]=useState('DELIVERY')
    const[menuactive,setmenuactive]=useState('Full Menu')
    const [modalVisible, setModalVisible] = useState(false);
    const [modalorderVisible, setModalorderVisible] = useState(false);
    const [quantity, setQuantity] = useState(0)
    const [filterinfo, setFilter] = useState<MenuItem[]>([]);

    const filteredData = filterinfo.filter((user) => user.isVeg === true);
    const [search, setSearch] = useState<string>('');
      
    
    const fetchMenuItems = async () => {
      return menuItems;
    };

    useEffect(() => {
      const loadData = async () => {
      const data = await fetchMenuItems();
        setFilter(data);
      };
      loadData();
      }, []);
    
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

    function Conditioning(){
      let result = data ?? [];
      if  (menuactive === 'Healthy'){return filteredData};
      if (search.trim() !== '') {
        result = result.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      if(active==='DELIVERY'){return data}
      if(active==='DINING'){return filteredData}
      
      return result;
    }

    const filteredRestaurants = Conditioning();
    
   return( 
    <View style={styles.container}>
      <FlatList
            data={filteredRestaurants}
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
        
        <Pressable onPress={()=>setactive('DELIVERY')}>
          <Text style={active==='DELIVERY'?styles.activeTab:styles.disableTab}>DELIVERY</Text>
        </Pressable>
        <Pressable onPress={()=>setactive('DINING')}>
          <Text style={active==='DINING'?styles.activeTab:styles.disableTab}>DINING</Text>
        </Pressable>
        <Pressable onPress={()=>setactive('REVIEWS')}>
          <Text style={active==='REVIEWS'?styles.activeTab:styles.disableTab}>REVIEWS</Text>
        </Pressable>
      </View>
      <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/mode-time-offer.png')} style={styles.modeIcon}/>

      <View style={styles.bikeContainer}>
        <Ionicons name='bicycle-outline' size={24} style={styles.bikeIcon}/>
        <Text style={styles.bikeIconText}>₹25 distance charge</Text> 
      </View>        
    <View style={styles.menuButtonGroup}>
        <Pressable onPress={()=>setmenuactive('Full Menu')} style={menuactive === 'Full Menu'? styles.active : styles.disable}>
           <Text style={menuactive === 'Full Menu'?styles.activeText :styles.disableText}>Full Menu</Text> 
           {menuactive === 'Full Menu' && (
            <View style={styles.underline} />
          )}   
        </Pressable>   
         
        <Pressable
        onPress={() => setmenuactive('Healthy')}
        style={menuactive === 'Healthy' ? styles.active : styles.disable}
        >
        <Text style={menuactive === 'Healthy' ? styles.activeText : styles.disableText}>
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
       <InputField title='Search' style={styles.searchField} text={styles.searchFieldText} value={search} onChangeText={setSearch}/>
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
  <SafeAreaView>
  
  <TouchableOpacity style={quantity!==0?styles.menuContainer : styles.bottomContainer}>
    <Ionicons name='menu-outline' color={'#FFFFFF'} size={20}/>
    <Text style={styles.bottomText}>Menu</Text>
  </TouchableOpacity>
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
    </SafeAreaView>

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

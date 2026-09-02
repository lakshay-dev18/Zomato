import{View,Text, Image, Pressable, FlatList} from 'react-native'
import{useState, useEffect} from 'react'
import styles from '../../../../src/features/home/styles/HomeScreenStyles'
import InputField from '../../../../src/shared/components/input_field/InputField'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import PressableButton from '../../../../src/features/home/components/pressableButtons';


type Category= { id: number; name: string; image: string }
type Restaurant = { id: number; name: string; category: string; rating: number; priceForOne: number; ecoMessage: string; maxSafety: boolean; image: string; route: string };

export default function HomeScreen(){
    const [categories, setCategories] = useState<Category[]>([]);
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const router = useRouter();

    useEffect(() => {
        Promise.all([
            fetch("https://6a965dfdfa33b37f821b2c24.mockapi.io/api/v1/categories").then(res => res.json()),
            fetch("https://6a965dfdfa33b37f821b2c24.mockapi.io/api/v1/restaurants").then(res => res.json()),
        ])
        .then(([categoriesData, restaurantsData]) => {
        setCategories(categoriesData);
        setRestaurants(restaurantsData);
        })
        .catch(error => console.log(error));
    }, []);

    return(
    <View style={styles.container}>
      <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      ListHeaderComponent={  
       <View> 
       <View style={styles.topContainer}> 
            <Pressable style={styles.locationLogoButton}>
                <Ionicons name='location-outline' size={25}/>
            </Pressable>

           
        <View style={styles.lineLogo} /> 
       
       <View style={styles.menuIcon}>
            <View style={styles.line}/>
            <View style={styles.line}/>
            <View style={styles.line}/>
        </View>
       </View>
       <View style={styles.inputFieldContainer}>
         <Ionicons name='search' size={22} color='red' style={styles.searchIcon}/> 
        <InputField title={'Restaurant name, cuisine, or a dish...'}
            style={styles.inputField}
            text={styles.inputFieldText}/>    
       </View>
       
        <PressableButton />
        <View style={styles.offerContainer}>
            <Image source={require('../../../../assets/icons/homeScreenIcons/offer.png')} style={styles.offerLogo}/>
            <Image source={require('../../../../assets/icons/homeScreenIcons/discounts.png')} style={styles.offerLogo}/>
        </View>    
         <Text style={styles.text}>Eat what makes you happy</Text>   
        </View>
       }     
        renderItem={({ item }) => (
        <View style={styles.categoryItem}>
          <Image source={{ uri: item.image }} style={styles.categoryCircle} />
          <Text>{item.name}</Text>
        </View>
      )}
      ListFooterComponent={
       <View>
        <Pressable style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>See more</Text>
            <Ionicons name='chevron-down-outline' style={styles.chevronIcon}/>
        </Pressable>
        <Text style={styles.restaurantCount}>396 restaurants around you</Text>

        <FlatList
            data={restaurants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Pressable style={styles.restaurantCard}
                onPress={() => router.push(`./restaurants/${item.route}`)}>
                    <Image source={{ uri: item.image }} style={styles.restaurantImage} />

                 <View style={styles.restaurantInfoRow}>
                    <Text style={styles.restaurantName}>{item.name}</Text>
                   <View style={styles.ratingBadge}>
                    <Text style={styles.ratingText}>{item.rating} ★</Text>
                </View> 

                </View>
                <View style={styles.categoryPrice}>
                <Text style={styles.restaurantCategory}>{item.category}</Text>
                <Text style={styles.priceText}>{item.priceForOne} for one</Text>
                </View>
                


                <View style={styles.bottomRow}>
                <View style={styles.ecoRow}>
                     <Ionicons name="leaf-outline" size={14} color="green" />
                 <Text style={styles.ecoText}>{item.ecoMessage}</Text>
                </View>

                
                <View style={styles.safetyBadge}>
                 <Image source={require('../../../../assets/icons/homeScreenIcons/max-safety.png')} style={styles.maxImage}/>
             </View>
             
            </View>
        </Pressable>
        )}
         />       
       </View> 
      }
    />
    </View>  
    )
}





      
       


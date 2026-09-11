import{View, Text, Pressable, Image} from 'react-native'
import styles from '../../../../src/features/home/styles/HomeScreenStyles'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

type RestaurantCard = {
    id: string;
    name: string;
    image: string;
    rating: number;
    category: string;
    priceForOne: number;
    ecoMessage: string;
    route: string;
};

export default function Card({item}:{item:RestaurantCard}){
const router = useRouter()
    return(
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
                 <Image source={require('../../../../assets/icons/homeScreenIcons/arrow.png')} style={styles.arrowImage}/>
                 <Image source={require('../../../../assets/icons/homeScreenIcons/max-safety.png')} style={styles.maxImage}/>
               </View>
             
                </View>
            </Pressable>
    )    
}        
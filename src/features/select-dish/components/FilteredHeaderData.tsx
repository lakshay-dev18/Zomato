import{View, Text,Image, Pressable} from 'react-native'
import styles from '../styles/SelectDishScreenStyles'

export default function FilteredHeaderData(){
    return(
            <View> 
                <View style={{ position: 'relative' }}>
                    <Image
                        source={require('../../../../assets/icons/eatHealthyScreenIcons/plant-protien-bowl.png')}
                        style={styles.plantImage}
                    />
                </View>
                <Text style={styles.plantText}>Plant Protien Bowl</Text>
                <View style={styles.iconContainer}>
                    <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/rating.png')} style={styles.ratingIcon}/> 
                    <Pressable style={styles.bestsellerButton}>
                        <Text style={styles.bestsellerText}>Bestseller</Text>
                    </Pressable>
                </View> 
                <Text style={styles.vegText}>[Veg preparation] Spring mix, plant based,{'\n'} organic... </Text>
                <Pressable style={styles.readButton}>
                 <Text style={styles.readButtonText}>read more</Text>
                </Pressable>
                <View style={styles.lineIcon}/> 
                <Text style={styles.addText}>Add On</Text>
                <Text style={styles.selectionText}>You can choose up to 4 options</Text>
            </View>
 )      
}
import{View, Text, Pressable} from 'react-native'
import styles from '../../../../src/features/order-placed/styles/OrderPlacedScreenStyles'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function OrderPlacedScreen(){
    return(
        <View style = {styles.container}>
            <Pressable onPress={()=>router.back()} style={styles.back}>
                <Ionicons name='arrow-back-outline' size={30}/>
            </Pressable>
               <Text style = {styles.congratsText}> Congratulations Order Placed</Text>
        </View>
    )
}
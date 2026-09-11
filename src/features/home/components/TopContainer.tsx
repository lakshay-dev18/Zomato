import {View, Pressable} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../../../../src/features/home/styles/HomeScreenStyles'

export default function TopContainer(){
    return(
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
        </View>       

    )
}               
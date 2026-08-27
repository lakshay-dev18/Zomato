import{View, Text, TextInput} from 'react-native'
import styles from '../styles/Styles'
import { LinearGradient } from 'expo-linear-gradient';
import Color from '../../../styles/Colors';
import Button from '../../../shared/components/Buttons/CustomButton';


export default function SignUp(){
    return(
        <LinearGradient
            colors={[Color.primary, Color.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <View style={styles.top} />
            <TextInput 
                placeholder='Enter your Number'
                style={styles.inputField}        />

            <Button title='Send OTP'
                style={styles.primaryButton}
                textStyle={styles.primaryButtonText}/>
            
            <View style={styles.orContainer}>
                <View style={styles.line} />
                    <Text style={styles.text}>Or</Text>
                <View style={styles.line} />
            </View>



        </LinearGradient>
    )
}
 
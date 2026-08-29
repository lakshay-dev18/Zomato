import{View, Text, TextInput, Image, } from 'react-native'
import styles from '../styles/Styles'
import { LinearGradient } from 'expo-linear-gradient';
import Color from '../../../shared/theme/Colors';
import CustomButton from '../../../shared/components/buttons/CustomButton';
import { router } from 'expo-router';
import{useState} from 'react'

export default function SignUp(){
    const [phoneNumber, setPhoneNumber] = useState('');
    return(
        <LinearGradient
            colors={[Color.primary, Color.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <View style={styles.skipButtonContainer}>
                <CustomButton icon={
                    <Image source={require('../../../../assets/icons/skip.png')}/>
                }
                onPress={()=> router.push({
                    pathname:'/tabs'
                })}/>
            </View>
            <View style={styles.top} />
            <View style={styles.phoneContainer}>
                {phoneNumber.length > 0 && (
                    <Text style={styles.countryCode}>+91</Text>
                )}
                <TextInput
                    placeholder="Enter your Number"
                    style={styles.inputField
                    }
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    maxLength={10}
                    keyboardType="phone-pad"
                />
            </View>

            <CustomButton title='Send OTP'
                onPress={() => router.push({
                    pathname: './auth/verificationCode',
                    params: { phoneNumber: phoneNumber, },
                    })
                }
                style={styles.sendOtpButton}
                textStyle={styles.sendOtpButtonText}/>
            
            <View style={styles.orContainer}>
                <View style={styles.line} />
                    <Text style={styles.text}>OR</Text>
                <View style={styles.line} />
            </View>

            <CustomButton title='Continue with Email' style={styles.emailButton} textStyle={styles.emailButtonText} 
                icon={
                    <Image source={require('../../../../assets/icons/email-Icon.png')}
                        style={styles.emailButtonLogo}/>
                }/>

            <View style={styles.buttonContainer}>  
                <CustomButton title='Facebook' style={styles.fbButton} textStyle={styles.fbButtonText}
                    icon={
                        <Image source={require('../../../../assets/icons/facebook-icon.png')}
                            style={styles.facebookButtonLogo}/>
                    }/>
                <CustomButton title='Google' style={styles.googleButton} textStyle={styles.googleButtonText}
                icon={
                    <Image source={require('../../../../assets/icons/google-icon.png')}
                        style={styles.googleButtonLogo}/>
                }/>
            </View> 

            <View style={styles.linkContainer}>
                <Text style={styles.linkContainerText}>By continuing, you agree to our</Text>
            </View>
            <View style={styles.linkContainer2}>
                <Text style={styles.link}>Terms of Service</Text>
                <Text style={styles.link}> Privacy Policy</Text>
                <Text style={styles.link}> Content Policy</Text>
            </View>           
        </LinearGradient>
    )
}
 
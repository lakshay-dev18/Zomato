import{View, Text, TextInput, TouchableOpacity, Pressable, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles/Styles'
import { LinearGradient } from 'expo-linear-gradient';
import Color from '../../../shared/theme/Colors';
import CustomButton from '../../../shared/components/buttons/CustomButton';
import { router } from 'expo-router';
import{useCallback, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';

export default function SignUp(){
    const [phoneNumber, setPhoneNumber] = useState('+91 ');
    useFocusEffect(
        useCallback(() => {
            setPhoneNumber('');
        }, [])
    );

    const KeyboardRemove = ()=>{
        Keyboard.dismiss();
        
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
            colors={[Color.primary, Color.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <View style={styles.skipButtonContainer}>
           <TouchableOpacity onPress={()=>router.push('/home')} >
            <Text style={styles.skipButtonText}>Skip</Text>
           </TouchableOpacity>
            </View>
            <View style={styles.top} />
            <View style={styles.phoneContainer}>
                <TextInput
                    placeholder="Enter your Number"
                    style={styles.inputField}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    maxLength={14}
                    keyboardType="phone-pad"
                    onFocus={()=>{if(phoneNumber === ''){ setPhoneNumber('+91 ')}} 
                    }
                />
            </View>

            <CustomButton title='Send OTP'
                onPress={() => router.push({
                    pathname: '/auth/verificationCode',
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
                        <Ionicons name='mail-outline' size={40} style={styles.emailButtonLogo} />                    
                }/>

            <View style={styles.rowButton}>
                <Pressable style={styles.facebookContainer}>
                    <Ionicons name='logo-facebook' size={35} style={styles.Logo}/>
                    <Text style={styles.facebook}>Facebook</Text>
                </Pressable>
                <Pressable style={styles.googleContainer}>
                    <Ionicons name='logo-google' size={35} color={'red'} style={styles.Logo}/>
                    <Text style={styles.google}>Google</Text>
                </Pressable>
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
        </TouchableWithoutFeedback>        
    )
}
 
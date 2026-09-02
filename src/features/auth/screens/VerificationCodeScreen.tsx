import { View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import { useState, useEffect} from 'react';
import styles from '../../../../src/features/auth/styles/VerificationScreenStyles';
import { router } from 'expo-router';
import CustomButton from '../../../../src/shared/components/Buttons/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import OTPInput from '../../../shared/components/otp_input/OTPInput';
import { Ionicons } from '@expo/vector-icons';

export default function VerificationCodeScreen() {
  const { phoneNumber } = useLocalSearchParams();
  const [timer, setTimer] = useState(30);

  useEffect(() => {

  if (timer === 0) {
    return; // STOP when timer reaches 0
  }

  const interval = setInterval(() => {
    setTimer((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(interval);

}, [timer]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={styles.containerNavigation}>
        <Pressable style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back-outline" size={35} style={{opacity:0.7}}/>
        </Pressable>
        <Text style={styles.text}>We have sent a verification code to</Text>
      </View>
      </SafeAreaView>
      <View style={styles.containerNumber}>
        <Text style={styles.textNumber}> +91-{phoneNumber} </Text>
      </View>
      <View style={styles.otpBoxContainer}>
        <OTPInput boxStyle={styles.otpBox}/>
      </View>
       {/* TIMER / RESEND BUTTON */}
      <View style={styles.otpTimerTop}/>      
       <View style={styles.otpTimer}>      
         {timer > 0 && (
           <Text>
              0:{timer}
           </Text>
         )}
         <View style={styles.otpTimerButton}>
          <Text style={styles.otpTimerButtonText}> Didn't receive the code? </Text>
          <TouchableOpacity
            disabled={timer > 0}
            onPress={() => setTimer(30)}
          >
          <Text style={[styles.otpTimerText,
              timer > 0 ? styles.resendDisabled : styles.resendActive
          ]}>Resend now</Text>
          </TouchableOpacity>
         </View> 
        </View>
    </View>
  );
}
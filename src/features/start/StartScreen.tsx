import { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Color from '../../shared/theme/Colors';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/auth/sign-up'); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:Color.background}}>
      <Image source={require('../../../assets/icons/splashScreenIcons/zomatologo.png')} style={{ width: 150, height: 150 }} />
    </View>
  );
}
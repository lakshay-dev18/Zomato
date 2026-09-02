import { useRef, useState } from 'react';
import { View, Text, TextInput, StyleProp, ViewStyle, TouchableWithoutFeedback } from 'react-native';
import { router } from 'expo-router';

type otp = {
    boxStyle?: StyleProp<ViewStyle>;
}
export default function VerificationScreen({boxStyle}:otp) {
  const [otp, setOtp] = useState('');
  const inputRef = useRef<TextInput>(null);

  const focusInput = () => {
    inputRef.current?.blur();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  return (
    <View>

      <TextInput
        ref={inputRef}
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={6}
        style={{ opacity: 0, height: 1, width: 1 ,}}
        returnKeyType="done"
        onSubmitEditing={() => {
        router.push('/tabs');
       }}
      />

      <TouchableWithoutFeedback onPress={focusInput}>
        <View style={{
          flexDirection: 'row',
          gap: 10,
        }}>

          {[0, 1, 2, 3, 4, 5].map((index) => (
            <View
              key={index}
              style={boxStyle}
            >
              <Text>
                {otp[index] || ''}
              </Text>
            </View>
          ))}

        </View>
      </TouchableWithoutFeedback>

    </View>
  );
}
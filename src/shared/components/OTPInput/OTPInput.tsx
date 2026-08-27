import { useState } from 'react';
import { View, Text, TextInput, StyleProp, ViewStyle  } from 'react-native';

type otp = {
    boxStyle?: StyleProp<ViewStyle>;
}
export default function VerificationScreen({boxStyle}:otp) {
  const [otp, setOtp] = useState('');

  return (
    <View>

      <TextInput
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={6}
      />

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

    </View>
  );
}
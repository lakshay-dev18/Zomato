import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SimpleCheckbox({ onToggle }: { onToggle: (checked: boolean) => void }) {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onToggle(newValue); 
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.box, isChecked && styles.boxChecked]}
        onPress={handlePress}
      >
        {isChecked && <Text style={{ color: 'white' }}>✓</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  box: { width: 20, height: 20, borderWidth: 1, borderColor: 'grey' },
  boxChecked: { backgroundColor: '#CB202D' },
});
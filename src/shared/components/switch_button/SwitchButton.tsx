import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


type SwitchButtonProps = {
  label?: string;
};

export default function SwitchButton({ label }:SwitchButtonProps) {
  const [isOn, setIsOn] = useState(false);

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.track, isOn && styles.trackOn]}
        onPress={() => setIsOn(!isOn)}
      >
        <View style={[styles.thumb, isOn && styles.thumbOn]} />
      </TouchableOpacity>
      {label ? <Text style={styles.labelText}>{label}</Text> : null}
    </View>
  );
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  track: {
    width: 40,
    height: 14,
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
    padding: 2,
    marginTop: 20,
    marginLeft: 20,
  },
  trackOn: {
    backgroundColor: 'green',
  },
  thumb: {
    width: 18,
    height: 18,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginTop: -4,
    marginLeft: -2,
    borderWidth: 1,
    borderColor: '#A4A0A0',
  },
  thumbOn: {
    alignSelf: 'flex-end',
  },
  labelText:{
    marginTop:20,
    fontFamily: 'Segoe UI',
    fontWeight: 400,
    fontSize: 8,
    marginLeft:-5
  }
});
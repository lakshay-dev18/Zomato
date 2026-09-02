import { Dimensions } from 'react-native';

export default function Size(){
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
}
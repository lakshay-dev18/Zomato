import {View, Text, Image} from 'react-native'
import {useState} from 'react'
import SimpleCheckbox from '../../../../src/shared/components/check_box/checkBox'
import styles from '../../../../src/features/select-dish/styles/SelectDishScreenStyles'

type DishItem = {
    id: string;
    name: string;
    price: number;
};
type Props={
    item:DishItem;
    setPrice: (price: number) => void;
}
export default function FilteredData({item,setPrice}:Props){
    
    return(
                <View style={styles.dataContainer}>
                    <View style={styles.vegIconContainer}>
                        <Image source={require('../../../../assets/icons/selectDishScreenIcons/veg-icon.png')} style={styles.vegIcon}/>   
                        <Text style={styles.nameText}>{item.name}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>₹{item.price}</Text>
                        <SimpleCheckbox
                            onToggle={(checked) => {
                                if (checked) {
                                  setPrice(item.price); 
                                } else {
                                  setPrice(0);
                                }
                        }}/>
                    </View>
                </View>
    )
}                
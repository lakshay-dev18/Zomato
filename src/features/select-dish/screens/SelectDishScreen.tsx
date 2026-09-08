import{View,Text, Image, Pressable, FlatList, Modal} from 'react-native'
import{useState, useEffect, } from 'react'
import styles from '../../../../src/features/select-dish/styles/SelectDishScreenStyles'
import addOns from '../../../../src/features/select-dish/Staticdata/data'
import SimpleCheckbox from '../../../../src/shared/components/check_box/checkBox'
import { Ionicons } from '@expo/vector-icons'


interface Props {
  visible: boolean;
  onClose: () => void;
  onAdd: (count: number) => void;
}

export default function SelectDishScreen({ visible, onClose, onAdd}: Props){
    const filteredUsers = addOns.filter((user) => user.name === 'BBQ Protien');
    const filtereddata = addOns.filter((user) => user.name !== 'BBQ Protien');
    const[counter,setCounter]= useState(1);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (visible) {
            setPrice(0); 
        }
    }, [visible]);
    return(
        <Modal visible={visible} animationType="slide" onRequestClose={onClose} >
           <View style={styles.transparentContainer}> 
            <Pressable onPress={onClose} style={styles.closeButton}>
                  <Ionicons name="close" size={18} color="white" />
            </Pressable>
            <View style={styles.container}>
           <FlatList
            data={filtereddata}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=> item.id.toString()}
            ListHeaderComponent={
            <View> 
                <View style={{ position: 'relative' }}>
                    <Image
                        source={require('../../../../assets/icons/eatHealthyScreenIcons/plant-protien-bowl.png')}
                        style={styles.plantImage}
                    />
                </View>
                <Text style={styles.plantText}>Plant Protien Bowl</Text>
                <View style={styles.iconContainer}>
                    <Image source={require('../../../../assets/icons/eatHealthyScreenIcons/rating.png')} style={styles.ratingIcon}/> 
                    <Pressable style={styles.bestsellerButton}>
                        <Text style={styles.bestsellerText}>Bestseller</Text>
                    </Pressable>
                </View> 
                <Text style={styles.vegText}>[Veg preparation] Spring mix, plant based,{'\n'} organic... </Text>
                <Pressable style={styles.readButton}>
                 <Text style={styles.readButtonText}>read more</Text>
                </Pressable>
                <View style={styles.lineIcon}/> 
                <Text style={styles.addText}>Add On</Text>
                <Text style={styles.selectionText}>You can choose up to 4 options</Text>
            </View>
            }
            renderItem={({item})=>(
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
            )}
            ListFooterComponent={
                <View>
                    <View style={styles.filterContainer}>   
                        <Text style={styles.protienText}>Choose Your Protien </Text>   
                        <Text style={styles.optionsText}>You can choose up to 3 options</Text>   
                    </View>              
                <FlatList 
                data={filteredUsers}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=>(
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
                )}
                />
                
            </View>    
        }
       /> 
       </View>
       </View>
       <View style={styles.counterContainer}>
                    <Pressable
                    onPress={()=>setCounter(counter-1)}>
                        <Text style={styles.counterButton}>-</Text>
                    </Pressable>
                    <Text style={styles.counterText}>{counter}</Text>
                    <Pressable
                    onPress={()=>setCounter(counter+1)}>
                        <Text style={styles.counterButton}>+</Text>
                    </Pressable>
                    <Pressable style={styles.addButton}
                     onPress={() => onAdd(counter)}>
                        <Text style={styles.addButtonText}>Add ₹{price}</Text>
                    </Pressable>
                </View>
       </Modal> 
    )
}

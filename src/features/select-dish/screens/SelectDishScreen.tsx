import{View,Text, Image, Pressable, FlatList, Modal} from 'react-native'
import{useState, useEffect, } from 'react'
import styles from '../../../../src/features/select-dish/styles/SelectDishScreenStyles'
import addOns from '../../../../src/features/select-dish/Staticdata/data'
import { Ionicons } from '@expo/vector-icons'
import FilteredHeaderData from '../components/FilteredHeaderData'
import FilteredData from '../components/FilteredData'
import { SafeAreaView } from 'react-native-safe-area-context'

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
            ListHeaderComponent={<FilteredHeaderData/>}
            renderItem={({item})=>(<FilteredData item={item} setPrice={(newPrice) => setPrice(newPrice)} />)}
            ListFooterComponent={
                <View>
                    <View style={styles.filterContainer}>   
                        <Text style={styles.protienText}>Choose Your Protien </Text>   
                        <Text style={styles.optionsText}>You can choose up to 3 options</Text>   
                    </View>              
                <FlatList 
                data={filteredUsers}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=>(<FilteredData item={item} setPrice={(newPrice) => setPrice(newPrice)} />)}
                />
                
            </View>    
        }
       /> 
       </View>
       </View>
              <SafeAreaView>
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
              </SafeAreaView>
       </Modal> 
    )
}

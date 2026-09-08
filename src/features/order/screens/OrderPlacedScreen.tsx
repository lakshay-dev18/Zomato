import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity,  Modal, Image, Pressable , ActivityIndicator} from 'react-native';
import sections from '../../../../src/features/order/order-data/OrderData';
import styles from '../../../../src/features/order/styles/OrderPlacedScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';


type SectionType =
  | 'delivery'
  | 'cartItem'
  | 'promo'
  | 'tip'
  | 'billLine'
  | 'grandTotal'
  | 'covidCheckbox'
  | 'DeliveryInstructions'
  | 'your details'
  | 'orderForSomeone'
  | 'climateDelivery';

interface Section {
  id: string;
  type: SectionType;
  data?: any;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  initialQuantity:number
}


export default function CheckoutScreen({visible,onClose, initialQuantity}:Props) {
  const [selectedTip, setSelectedTip] = useState<string | null>(null);
  const [isCovidChecked, setIsCovidChecked] = useState(false);
  const [counter, setCounter] = useState(initialQuantity);

  useEffect(() => {
  if (visible) {
    setCounter(initialQuantity);
  }
}, [visible, initialQuantity]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['sectionItems'],
    queryFn: async () => sections,
});

if (isLoading) {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.transparentContainer}>
                <ActivityIndicator size="large" color="red" />
            </View>
        </Modal>
    );
}

if (isError) {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.transparentContainer}>
                <Text style={{ color: 'red' }}>Something went wrong. Please try again.</Text>
            </View>
        </Modal>
    );
}

  const renderItem = ({ item }: { item: Section }) => {
    switch (item.type) {
      case 'delivery':
        return (

          <View style={styles.block}>
            <View style={styles.locationContainer}>
                <Ionicons name='location' size={20} color={'green'}/>
                <Text style={styles.boldText}>{item.data.address}</Text>
                <Ionicons name='chevron-down-outline' size={18}  style={styles.downIcon}/>
            </View>
            <View style={styles.timingContainer}>
                <Ionicons name='time-outline' size={18} color={'green'}/>
                <Text style={styles.DeliveryText}>Delivery in {item.data.eta}</Text>
            </View>
          </View>
        );

      case 'cartItem':
        return (
          <View style={styles.block}>
            <View style={styles.row}>
              <Image source={require('../../../../assets/icons/selectDishScreenIcons/veg-icon.png')} style={styles.vegIcon}/>
              <Text style={styles.cartText}>{item.data.name}</Text>
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
                </View>
            </View>
              <Text style={styles.priceText}>₹ {item.data.price}</Text>
              <Text style={styles.priceSecondText}>₹ {item.data.price}</Text>
            <Text style={styles.addOnText}>{item.data.addOn}</Text>
            <Pressable style={styles.cookingButton}>
                <Text style={styles.cookingButtonText}>Add cooking instructions (optional)</Text>
                <View style={styles.dotedLine}></View>
            </Pressable>
          </View>
        );

      case 'promo':
        return (
          <View style={[styles.block, styles.row]}>
            <View>
              <Text style={styles.OfferText}>{item.data.labelType}</Text>
              <View style={styles.offerContainer}>
                <Ionicons name='checkmark-circle-outline' size={20}/>
                <Text style={styles.labelText}>{item.data.label}</Text>
                <Pressable style={styles.link}>
                    <Text style={styles.linkText}>View offers</Text>
                </Pressable>

              </View>
              <Text style={styles.subLabelText}>{item.data.subLabel}</Text>
            </View>
          </View>
        );

      case 'tip':
        return (
          <View style={styles.block}>
            <Text style={styles.OfferText}>{item.data.title}</Text>
            <Text style={styles.subtitleText}>{item.data.subtitle}</Text>
            <View style={styles.tipRow}>
              {item.data.options.map((opt: any) => (
                
                <TouchableOpacity
                  key={opt.id}
                  style={[
                    styles.tipButton,
                    selectedTip === opt.id && styles.tipButtonSelected,
                  ]}
                  onPress={() => setSelectedTip(opt.id)}
                >
                    <View style={styles.buttonRow}>
                   <Ionicons name={opt.icon} size={16}  style={styles.tipIcon} />
                  <Text
                    style={
                      selectedTip === opt.id ? styles.tipTextSelected : styles.tipText
                    }
                  >
                    {opt.label}
                  </Text>
                    </View>

                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case 'billLine':
          return (
            <View style={styles.billBlock}>
              {item.data.map((line: { id: string; label: string; amount: number | null; actionText?: string }) => (
                <View key={line.id} style={styles.rowBillLine}>
                  <Text style={[styles.subText,line.label === 'Grand Total'&& {fontWeight:'bold', fontSize:16}]}>{line.label}</Text>
                  {line.amount !== null ? (
                    <Text style={[styles.subText,line.amount ===  334 && {fontWeight:'bold', fontSize:16}]}>₹{line.amount}</Text>
                  ) : (
                    <Pressable style={styles.addButton}>
                      <Text style={styles.addButtonText}>Add</Text>
                    </Pressable>
                  )}
                </View>
              ))}
            </View>
          );

      case 'covidCheckbox':
        return (
          <TouchableOpacity
            style={styles.block}
            onPress={() => setIsCovidChecked(!isCovidChecked)}
          >
            <View style={styles.row}>
              <View
                style={[
                  styles.checkbox,
                  isCovidChecked && styles.checkboxChecked,
                ]}
              />
              <Text style={styles.covidText}>{item.data.label}</Text>
            </View>
            <Text style={styles.covidSubText}>{item.data.description}</Text>
          </TouchableOpacity>
        );

      case 'DeliveryInstructions':
        return (
          <View style={styles.deliveryBlock}>
           <View style={styles.deliveryBlockRow}> 
              <Text style={styles.deliveryTypeText}>{item.type}</Text>
              <Text style={styles.changeButton}>Change</Text>
           </View>
           <View style={styles.handRow}>
            <Ionicons name='alert-circle-outline' size={20} color={'green'}/>
            <Text style={styles.handText}>{item.data.label}</Text>
           </View> 
            <Pressable>
              <Text style={styles.voiceButtonText}>Add voice directions</Text>
            </Pressable>
          </View>
        );

      case 'your details':
        return (
          <View style={[styles.block, styles.row]}>
            <View>
              <Text style={styles.detailText}>{item.type}</Text>
             <View style={styles.detailRow}> 
              <Text style={styles.userDetailText}>{item.data.name},</Text>
              <Text style={styles.userDetailText}>{item.data.phone}</Text>
             </View> 
            </View>
            <Pressable>
              <Text style={styles.changeButton}>Change</Text>
            </Pressable>
          </View>
        );

      case 'orderForSomeone':
        return (
          <View style={[styles.orderblock, styles.row]}>
            <View>
              <Text style={styles.orderText}>{item.data.label}</Text>
              <Text style={styles.subText}>{item.data.subLabel}</Text>
            </View>
            <Text style={styles.addlink}>Add</Text>
          </View>
        );

      case 'climateDelivery':
        return (
          <View style={styles.climateContainer}>
           <View style={styles.climateRow}> 
            <Ionicons name='leaf-outline' size={20} color={'green'}/>
            <Text style={styles.climateText}>{item.data.title}</Text>
           </View> 
            <Text style={styles.climateSubText}>{item.data.description}</Text>
            <Pressable>
              <Text style={styles.knowText}>Know more </Text>
            </Pressable>
            <Text style={styles.errorText}>{item.data.note}</Text>
          </View>
        );
        
      default:
        return null;
    }
  };

  return (
    <View>
      <Modal visible={visible} animationType="slide" onRequestClose={onClose} transparent={true}>
        <View style={styles.transparentContainer}>
          <Pressable onPress={onClose} style={styles.closeButton}>
                  <Ionicons name="close" size={18} color="white" />
            </Pressable>
          <View style={styles.mainContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={()=>(
              <View>
              <View style={styles.rowContainer}>
                <Image source={require('../../../../assets/icons/placeOrderScreenIcons/g-pay.png')} style={styles.gpayIcon}/>
                <Text style={styles.payText}>PAY USING</Text>
                <Ionicons name='caret-up-outline' size={9} style={styles.payIcon}/>
                <Pressable style={styles.orderButton}>
                  <Text style={styles.buttonPrice}>₹334.00</Text>
                  <Text style={styles.buttonText}>Place Order</Text>
                  <Text style={styles.buttonSecondText}>TOTAL</Text>
                </Pressable>
              </View>
                <Text style={styles.gPayText}>Google Pay</Text>
              </View>  
            )}
          />
          </View>
        </View>
      </Modal>
    </View>
  );
}


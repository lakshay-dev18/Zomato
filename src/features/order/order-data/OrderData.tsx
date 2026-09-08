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


const sections: Section[] = [
  {
    id: '1',
    type: 'delivery',
    data: {
      address: 'Delivered at Home-Flat no 301, SVR Enclave, Hyper Nagar,\n Vasavi...',
      eta: '42 mins',
    },
  },
  {
    id: '2',
    type: 'cartItem',
    data: {
      name: 'Plant Protien Bowl',
      price: 279,
      quantity: 1,
      addOn: 'Add On Mushroom',
    },
  },
  {
    id: '3',
    type: 'promo',
    data: {
      label: 'Select a promo code',
      labelType: 'Offers',
      subLabel: 'Save ₹18.75 with code DOMSAFETY',
    },
  },
  {
    id: '4',
    type: 'tip',
    data: {
      title: 'Please tip your valet',
      subtitle:
        'Support your valet and make their day! 100% of your tip will be transferred to your valet.',
      options: [
        { id: 't1', label: '₹20' , icon: 'shield-checkmark-outline'},
        { id: 't2', label: '₹30' ,icon: 'cash-outline'},
        { id: 't3', label: '₹50' ,icon: 'pizza-outline'},
        { id: 't4', label: 'Custom' ,icon: 'cube-outline'},
      ],
    },
  },
  { id: '5', type: 'billLine',
     data:[
      { id:'b1',label: 'Item Total', amount: 279 } ,
      { id:'b2',label: 'Delivery Charge', amount: 50 },
      { id:'b3',label: 'Taxes', amount: 5 },
      { id:'b4',label: 'Donate ₹3 to Feeding India Foundation', amount: null },
      { id:'b5',label: 'Grand Total', amount: 334 }
    ],  
  },  
  {
    id: '6',
    type: 'covidCheckbox',
    data: {
      label: 'This order is related to a COVID-19 emergency',
      description:
        'This order will be prepared and delivered on priority. #RestaurantsAgainstCOVID',
    },
  },
  {
    id: '7',
    type: 'DeliveryInstructions',
    data: { label: 'Hand me the Order', addText: 'Add voice directions' },
  },
  {
    id: '8',
    type: 'your details',
    data: { name: 'Divya Sigatapu', phone: '9109109109' },
  },
  {
    id: '9',
    type: 'orderForSomeone',
    data: { label: 'Order for someone else', subLabel: 'Send personalized message and e-card' },
  },
  {
    id: '10',
    type: 'climateDelivery',
    data: {
      title: 'Climate conscious delivery',
      description:
        'We fund environmental projects to offset the carbon footprint of our deliveries.',
      note: 'Orders once placed cannot be cancelled and are non-refundable.',
    },
  },
];
export default sections;
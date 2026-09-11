import{View,Text, Image, Pressable, FlatList, ActivityIndicator} from 'react-native'
import styles from '../../../../src/features/home/styles/HomeScreenStyles'
import InputField from '../../../../src/shared/components/input_field/InputField'
import { Ionicons } from '@expo/vector-icons'
import PressableButton from '../../../shared/components/pressable_button/pressableButtons';
import { useState } from 'react'
import { useCategories } from '../../../../src/features/home/api/CategoryApi'
import { useRestaurants } from '../../../../src/features/home/api/RestaurantsApi'
import Card from '../../../../src/features/home/components/Card'
import TopContainer from '../../../../src/features/home/components/TopContainer'

type CategoryItem = { id: number; name: string; image: string; };

type RestaurantItem = { id: number; name: string; image: string; rating: number; category: string; priceForOne: number; ecoMessage: string; route: string; };


export default function HomeScreen(){
    const[search,setSearch] = useState('')


    const { data: categoriesData, isLoading: catLoading, isError: catError } = useCategories();
    const { data: restaurantsData, isLoading: resLoading, isError: resError } = useRestaurants();

    const isLoading = catLoading || resLoading;
    const isError = catError || resError;

    if(isLoading){
    return( 
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={25} />
        </View>
    )
    }
    if(isError){
        return(
            <View style={styles.loadingContainer}>
                <Text>There is some error in getting data</Text>
            </View>
        )    
    }

    function Filtered(){
        let searching = categoriesData ?? [];
        if (search.trim() !== ''){
            searching = searching.filter((item:CategoryItem)=> item.name.toLowerCase().includes (search.toLowerCase()))
        }
        return searching;
    }
    const category = Filtered();
    
    function FilteredRestaurants(){
        let searchingRestaurants = restaurantsData ?? [];
        if (search.trim() !== ''){
            searchingRestaurants = searchingRestaurants.filter((item:RestaurantItem)=> item.name.toLowerCase().includes (search.toLowerCase()))
        }
        return searchingRestaurants;
    }
    const restaurant = FilteredRestaurants();
//     return(
//     <View style={styles.container}>
//         <TopContainer/>

//         <View style={styles.inputFieldContainer}>
//          <Ionicons name='search' size={22} color='red' style={styles.searchIcon}/> 
//            <InputField title={'Restaurant name, cuisine, or a dish...'}
//                        style={styles.inputField}
//                        text={styles.inputFieldText}
//                        value={search}
//                        onChangeText={setSearch}/>    
//         </View>
//         <View style={styles.pressableContainer}>
//             <PressableButton />  
//         </View>
    
//       <FlatList
//       data={category}
//       keyExtractor={(item) => item.id.toString()}
//       numColumns={4}
//       ListHeaderComponent={  
//        <View> 
       
//         <View style={styles.offerContainer}>
//             <Image source={require('../../../../assets/icons/homeScreenIcons/offer.png')} style={styles.offerLogo}/>
//             <Image source={require('../../../../assets/icons/homeScreenIcons/discounts.png')} style={styles.offerLogo}/>
//         </View>    
//          <Text style={styles.text}>Eat what makes you happy</Text>   
//         </View>
//        }     
//         renderItem={({ item }) => (
//         <View style={styles.categoryItem}>
//           <Image source={{ uri: item.image }} style={styles.categoryCircle} />
//           <Text numberOfLines={1} adjustsFontSizeToFit style={styles.category}>{item.name}</Text>
//         </View>
//       )}
//       ListFooterComponent={
//        <View>
//         <Pressable style={styles.seeMoreButton}>
//             <Text style={styles.seeMoreText}>See more</Text>
//             <Ionicons name='chevron-down-outline' style={styles.chevronIcon}/>
//         </Pressable>
//         <Text style={styles.restaurantCount}>396 restaurants around you</Text>

//         <FlatList
//             data={restaurant}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => ( <Card item={item}/>)}
//          />    
//        </View> 
//       }
//     />
//     </View>  
//     )
// }



return(
    <View style={styles.container}>
        <TopContainer/>

        <View style={styles.inputFieldContainer}>
         <Ionicons name='search' size={22} color='red' style={styles.searchIcon}/> 
           <InputField title={'Restaurant name, cuisine, or a dish...'}
                       style={styles.inputField}
                       text={styles.inputFieldText}
                       value={search}
                       onChangeText={setSearch}/>    
        </View>
        <View style={styles.pressableContainer}>
            <PressableButton />  
        </View>
    
      <FlatList
      data={restaurant}  
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => ( <Card item={item}/>)}
      contentContainerStyle={{ paddingBottom: 230 }} 
      ListHeaderComponent={  
       <View> 
        <View style={styles.offerContainer}>
            <Image source={require('../../../../assets/icons/homeScreenIcons/offer.png')} style={styles.offerLogo}/>
            <Image source={require('../../../../assets/icons/homeScreenIcons/discounts.png')} style={styles.offerLogo}/>
        </View>    
         <Text style={styles.text}>Eat what makes you happy</Text>   
        
        <View style={styles.categoryGrid}>
         {category.map((item:CategoryItem)=>(
            <View key={item.id.toString()} style={styles.categoryItem}>
             <Image source={{ uri: item.image }} style={styles.categoryCircle} />
             <Text numberOfLines={1} adjustsFontSizeToFit style={styles.category}>{item.name}</Text>
           </View>
         ))}
           </View>
        
       <View>
        <Pressable style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>See more</Text>
            <Ionicons name='chevron-down-outline' style={styles.chevronIcon}/>
        </Pressable>
        <Text style={styles.restaurantCount}>396 restaurants around you</Text>

       </View> 
       </View> 
      }
    />
    </View>  
    )
}




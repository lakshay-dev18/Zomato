import { Pressable, Text, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../../features/home/styles/HomeScreenStyles';

type ButtonStyleKey = "maxButton" | "proButton" | "cuisinesButton" | "popularButton";

type FilterButton = {
  label: string;
  styleKey: ButtonStyleKey;
  icon?: keyof typeof Ionicons.glyphMap;
  iconImage?: any;
  iconPosition?: 'left' | 'right';
};

const filterButtons: FilterButton[] = [
  { label: "MAX\nSafety", styleKey: "maxButton" },
  {
    label: "PRO",
    styleKey: "proButton",
    iconImage: require('../../../../assets/icons/homeScreenIcons/shield-crown.png'),
  },
  {
    label: "Cuisines",
    styleKey: "cuisinesButton",
    icon: "caret-down-outline",
    iconPosition: "right",
  },
  { label: "Rating", styleKey: "maxButton" },
  {
    label: "Popular",
    styleKey: "popularButton",
    icon: "swap-vertical-outline",
  },
];

const screenWidth = Dimensions.get('window').width;
const BUTTON_GAP = 6;
const VISIBLE_BUTTONS = 4;
const BUTTON_WIDTH = (screenWidth - BUTTON_GAP * (VISIBLE_BUTTONS + 1)) / VISIBLE_BUTTONS;

export default function PressableButton() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 4, paddingRight: BUTTON_GAP  }}
    >
      {filterButtons.map((btn, index) => (
        <Pressable
          key={index}
          style={[
            styles[btn.styleKey],
            { width: BUTTON_WIDTH, marginRight: BUTTON_GAP },
          ]}
        >
          {btn.iconImage && (
            <Image source={btn.iconImage} style={styles.shieldCrownLogo} />
          )}
          {btn.icon && btn.iconPosition !== "right" && (
            <Ionicons name={btn.icon} style={styles.caretIcon} />
          )}

          <Text numberOfLines={2} adjustsFontSizeToFit style={styles.maxButtonText}>
            {btn.label}
          </Text>

          {btn.icon && btn.iconPosition === "right" && (
            <Ionicons name={btn.icon} style={styles.caretIcon} />
          )}
        </Pressable>
      ))}
    </ScrollView>
  );
}
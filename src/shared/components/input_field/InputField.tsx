import { TextInput, View, StyleProp, ViewStyle, TextStyle} from "react-native";

type fields={
    title:string;
    style?:StyleProp<ViewStyle>;
    text?:StyleProp<TextStyle>;
}
export default function InputField({title,style,text}:fields){
    return(
        <View style={{flex:1}}>
            <TextInput placeholder={title} style={[style,text]}/>
        </View>
    )
}
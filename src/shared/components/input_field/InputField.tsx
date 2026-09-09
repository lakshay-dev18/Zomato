import { TextInput, View, StyleProp, ViewStyle, TextStyle} from "react-native";

type fields={
    title:string;
    style?:StyleProp<ViewStyle>;
    text?:StyleProp<TextStyle>;
    onChangeText?:(text: string) => void;
    value?:string;
    

}
export default function InputField({title,style,text,onChangeText,value}:fields){
    return(
        <View style={{flex:1}}>
            <TextInput placeholder={title} style={[style,text]} onChangeText={onChangeText} value={value}/>
        </View>
    )
}
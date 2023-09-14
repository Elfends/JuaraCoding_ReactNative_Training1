import { View } from "react-native-web";
import {box} from "./style";
export default function FirstComponent(){
return(
  <View>
    <View style={box.boxred}></View>
    <View style={box.boxgreen}></View>
    <View style={box.boxblue}></View>
  </View>
)
}
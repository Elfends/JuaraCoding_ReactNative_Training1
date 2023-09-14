import { Image, Text, View } from "react-native-web";
import {card} from "./style";
import {FontAwesome} from "react-native-vector-icons"
export default function CardProfile(){
return(
  <View style={card.container}>
    <View style={card.header}>
      <Image style={card.avatar} source={{uri:"https://i.pravatar.cc/300"}}></Image>
    </View>
    <View style={card.body}>
      <Text style={card.name}>Jhon Doe</Text>
      <Text style={card.testi}>Saya adalah trainee JuaraCoding MERN batch 17</Text>
      <View style={card.social}>
        <View style={card.socialItem}>
          <FontAwesome name="twitter" size={23} color="blue"/>
        </View>
        <View style={card.socialItem}>
          <FontAwesome name="linkedin" size={23} color="blue"/>
        </View>
        <View style={card.socialItem}>
          <FontAwesome name="github" size={23} color="white"/>
        </View>
        
      </View>
    </View>
  </View>
)
}
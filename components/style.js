import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
export const box = StyleSheet.create({
  boxred:{
    width:100,
    height:100,
    backgroundColor:"red",
  },
  boxgreen:{
    width:100,
    height:100,
    backgroundColor:"green"
  },
  boxblue:{
    width:100,
    height:100,
    backgroundColor:"blue"
  }
})
export const card = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#0f0f0f',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:20,
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    // maxWidth: 0.8 * windowWidth,
    elevation: 5,
    // flexWrap: "wrap",
    borderRadius:20,
  },
  header:{
    // flexDirection:"row",
  },
  avatar:{
    height:70,
    width:70,
    borderRadius:35
  },
  body:{
    paddingLeft:10,
    flex:1
    // color:"white",
    // overflow:"wrap",
    // flexWrap:"wrap",
  },
  name:{
    fontSize:24,
    fontStyle:"bold",
    color:"white",
  },
  testi:{
    fontSize:20,
    color:"white",
    flex:1,
    // flexWrap: "wrap",
  },
  social:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    flex:1
  },
  socialItem:{
    // width:35,
    // height:35,
    padding:10,
  }
})
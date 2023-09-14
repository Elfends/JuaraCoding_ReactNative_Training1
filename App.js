import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from "./components/FirstComponent";
import CardProfile from './components/CardProfile';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, justifyContent:"center"}}>
        {/* <FirstComponent/> */}
        <View style={[styles.container, { padding: 15 }]}>
          <CardProfile/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8f8f8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import MaskedView from '@react-native-masked-view/masked-view';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MaskedView maskElement={<Text style={styles.text}>Hello World</Text>}>
        <View style={styles.content}>
          <View style={styles.first}></View>
          <View style={styles.second}></View>
          <View style={styles.third}></View>
        </View>
      </MaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    height: 100,
  },
  first: {
    height: 100,
    width: 100,
    backgroundColor: 'pink',
  },
  second: {
    height: 100,
    width: 100,
    backgroundColor: 'purple',
  },
  third: {
    height: 100,
    width: 100,
    backgroundColor: 'teal',
  },
});

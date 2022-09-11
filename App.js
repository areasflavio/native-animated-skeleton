import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ItemList } from './components/ItemList';
import { ItemListLoader } from './components/ItemListLoader';

export default function App() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {hasLoaded ? <ItemList /> : <ItemListLoader />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
});

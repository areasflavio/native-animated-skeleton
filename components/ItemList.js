import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { data } from '../utils/data';

export function ItemList() {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text} numberOfLines={2}>
              {item.details}
            </Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});

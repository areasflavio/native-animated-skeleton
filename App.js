import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function App() {
  const [isSelected, setIsSelected] = useState(false);
  const myVal = useSharedValue(0);

  const handlePress = useCallback(() => {
    myVal.value = withTiming(myVal.value + 10);
  }, [myVal]);

  const circleStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: isSelected
            ? withTiming(2, { duration: 100 })
            : withTiming(1, { duration: 1000 }),
        },
        {
          translateX: myVal.value,
        },
      ],
    }),
    [isSelected, myVal]
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pressable onPress={handlePress}>
        <Reanimated.View style={[styles.circle, circleStyle]}></Reanimated.View>
        <Switch
          value={isSelected}
          onValueChange={() => setIsSelected((val) => !val)}
        />
      </Pressable>
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
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    margin: 100,
    backgroundColor: 'pink',
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

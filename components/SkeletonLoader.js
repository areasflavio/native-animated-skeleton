import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export function SkeletonLoader({ children, backgroundColor, highlightColor }) {
  const [layout, setLayout] = useState();
  const sharedValue = useSharedValue(0);

  useEffect(() => {
    sharedValue.value = withRepeat(
      withTiming(1, {
        duration: 1000,
      }),
      Infinity
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          sharedValue.value,
          [0, 1],
          [layout ? -layout.width : 0, layout ? layout.width : 0]
        ),
      },
    ],
  }));

  if (!layout) {
    return (
      <View onLayout={(e) => setLayout(e.nativeEvent.layout)}>{children}</View>
    );
  }

  return (
    <MaskedView
      maskElement={children}
      style={{ width: layout.width, height: layout.height }}
    >
      <View style={[styles.background, { backgroundColor }]} />

      <Reanimated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
        <MaskedView
          style={StyleSheet.absoluteFill}
          maskElement={
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFill}
              colors={['transparent', 'black', 'transparent']}
            />
          }
        >
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: highlightColor },
            ]}
          />
        </MaskedView>
      </Reanimated.View>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    overflow: 'hidden',
  },
});

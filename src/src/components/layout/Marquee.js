import React, { useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Animated, Easing, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { colors, DISPLAY } from '../../theme';
import { MARQUEE_WORDS } from '../../config/constants';

function Group() {
  return (
    <View style={{ flexDirection: 'row' }}>
      {MARQUEE_WORDS.map((word) => (
        <Text key={word} style={styles.text}>
          {word}  🐾  
        </Text>
      ))}
    </View>
  );
}

export default function Marquee() {
  const x = useRef(new Animated.Value(0)).current;
  const [groupWidth, setGroupWidth] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const { width } = useWindowDimensions();
  const copies = groupWidth ? Math.ceil(width / groupWidth) + 1 : 2;

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion).catch(() => {});
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotion);
    return () => sub?.remove?.();
  }, []);

  useEffect(() => {
    if (!groupWidth || reduceMotion) return undefined;
    x.setValue(0);
    const loop = Animated.loop(
      Animated.timing(x, { toValue: -groupWidth, duration: 14000, easing: Easing.linear, useNativeDriver: true })
    );
    loop.start();
    return () => loop.stop();
  }, [groupWidth, reduceMotion, x]);

  return (
    <View style={styles.band} accessible accessibilityLabel={MARQUEE_WORDS.join(', ')}>
      <Animated.View style={{ flexDirection: 'row', transform: [{ translateX: x }] }}>
        <View onLayout={(e) => !groupWidth && setGroupWidth(e.nativeEvent.layout.width)}>
          <Group />
        </View>
        {Array.from({ length: copies }, (_, i) => (
          <Group key={i} />
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  band: { backgroundColor: colors.red, paddingVertical: 12, marginHorizontal: -24, overflow: 'hidden', transform: [{ rotate: '-1deg' }] },
  text: { color: colors.white, fontFamily: DISPLAY, fontSize: 22 },
});

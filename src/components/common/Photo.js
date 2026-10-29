import React from 'react';
import { Image, Text, View } from 'react-native';
import { colors } from '../../theme';

// alt: descrição da foto para leitores de tela
export default function Photo({ source, style, alt, emoji = '🐶', bg = colors.orange }) {
  if (source) {
    return (
      <Image
        source={source}
        style={style}
        resizeMode="cover"
        accessible={!!alt}
        accessibilityLabel={alt}
      />
    );
  }

  return (
    <View
      style={[style, { backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }]}
      accessible={!!alt}
      accessibilityLabel={alt}
    >
      <Text style={{ fontSize: 36 }}>{emoji}</Text>
    </View>
  );
}

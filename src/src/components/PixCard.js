import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { colors, DISPLAY, BODY, BODY_SEMIBOLD } from '../theme';
import { images } from '../assets/images';
import { PIX_KEY } from '../config/constants';

export default function PixCard() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await Clipboard.setStringAsync(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title} accessibilityRole="header">
        Faça sua doação
      </Text>

      <View style={styles.qr}>
        {images.qrcode ? (
          <Image
            source={images.qrcode}
            style={styles.qrImg}
            resizeMode="contain"
            accessibilityLabel="QR Code Pix para doação"
          />
        ) : (
          <Text style={styles.qrText}>QR CODE</Text>
        )}
      </View>

      <Text style={styles.label}>CHAVE PIX</Text>
      <View style={styles.row}>
        <TextInput value={PIX_KEY} editable={false} style={styles.input} accessibilityLabel="Chave Pix" />
        <Pressable
          style={[styles.copyBtn, copied && { backgroundColor: colors.green }]}
          onPress={copy}
          accessibilityRole="button"
          accessibilityLabel={copied ? 'Chave Pix copiada' : 'Copiar chave Pix'}
        >
          <Text style={styles.copyText}>{copied ? 'Copiado!' : 'Copiar'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.cream, borderRadius: 28, padding: 24, alignItems: 'center' },
  title: { fontFamily: DISPLAY, fontSize: 30, color: colors.dark },
  qr: { width: 160, height: 160, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', marginVertical: 16 },
  qrImg: { width: '100%', height: '100%' },
  qrText: { fontFamily: DISPLAY, fontSize: 20, color: colors.dark },
  label: { alignSelf: 'flex-start', fontFamily: BODY_SEMIBOLD, fontSize: 12, letterSpacing: 1, color: colors.brown, marginBottom: 6 },
  row: { flexDirection: 'row', gap: 8, width: '100%' },
  input: { flex: 1, fontFamily: BODY, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, color: colors.dark },
  copyBtn: { backgroundColor: colors.dark, borderRadius: 10, paddingHorizontal: 18, minHeight: 46, justifyContent: 'center' },
  copyText: { fontFamily: BODY_SEMIBOLD, color: colors.white, fontSize: 14 },
});

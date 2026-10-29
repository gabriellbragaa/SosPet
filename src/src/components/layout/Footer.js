import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY, BODY, BODY_MEDIUM, BODY_SEMIBOLD } from '../../theme';
import { LINKS } from '../../config/constants';
import Section from './Section';
import useBreakpoint from '../../hooks/useBreakpoint';

function FooterLink({ label, url }) {
  return (
    <Pressable
      onPress={() => Linking.openURL(url).catch(() => {})}
      accessibilityRole="link"
      hitSlop={6}
      style={({ pressed }) => pressed && { opacity: 0.6 }}
    >
      <Text style={[styles.text, styles.link]}>{label}</Text>
    </Pressable>
  );
}

export default function Footer() {
  const { isDesktop } = useBreakpoint();

  return (
    <Section bg={colors.dark} style={{ paddingBottom: 28 }}>
      <View style={[styles.top, isDesktop && styles.topDesktop]}>
        <View>
          <Text style={[styles.logo, isDesktop && { fontSize: 72, lineHeight: 74 }]}>SOS</Text>
          <Text style={styles.sub}>BANABUIÚ - CE</Text>
        </View>

        <View style={styles.contact}>
          <Text style={styles.title}>Contato</Text>
          <FooterLink label="Instagram" url={LINKS.instagram} />
          <FooterLink label="WhatsApp" url={LINKS.whatsapp} />
          <Text style={styles.text}>CNPJ:</Text>
          <Text style={styles.text}>Localização: Banabuiú - CE</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.copy}>
          © 2026 ONG SOS Pet Banabuiú · Feito com amor pelos animais de Banabuiú
        </Text>
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  top: { gap: 24 },
  topDesktop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  logo: { fontFamily: DISPLAY, fontSize: 52, lineHeight: 56, color: colors.red },
  sub: { fontFamily: BODY_MEDIUM, color: colors.red, fontSize: 12, letterSpacing: 3, marginTop: -2 },
  contact: { gap: 8, minWidth: 220 },
  title: { fontFamily: BODY_SEMIBOLD, color: colors.orange, fontSize: 14 },
  text: { fontFamily: BODY, color: colors.onDark, fontSize: 14 },
  link: { textDecorationLine: 'underline' },
  bottom: { marginTop: 36, paddingTop: 20, borderTopWidth: 1, borderTopColor: colors.darkCard },
  copy: { fontFamily: BODY, color: colors.onDarkMuted, fontSize: 12, lineHeight: 18, textAlign: 'center' },
});

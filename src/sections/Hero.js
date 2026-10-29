import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY, DISPLAY_ITALIC, BODY, BODY_MEDIUM, BODY_SEMIBOLD } from '../theme';
import { images } from '../assets/images';
import Button from '../components/common/Button';
import Photo from '../components/common/Photo';
import Section from '../components/layout/Section';
import useBreakpoint from '../hooks/useBreakpoint';

export default function Hero({ onNavigate }) {
  const { isDesktop } = useBreakpoint();

  return (
    <Section bg={colors.cream} innerStyle={[styles.inner, isDesktop && styles.innerDesktop]}>
      <View style={[styles.textCol, isDesktop && styles.textColDesktop]}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🐾 PROTEGENDO OS ANIMAIS DESDE 2018</Text>
        </View>

        <Text style={[styles.h1, isDesktop && styles.h1Desktop]} accessibilityRole="header">
          Ajude a transformar{' '}
          <Text style={styles.italic}>abandono</Text> em um{' '}
          <Text style={{ color: colors.red }}>novo começo.</Text>
        </Text>

        <Text style={[styles.lead, isDesktop && styles.leadDesktop]}>
          Resgatamos, tratamos e castramos animais em situação de rua em Banabuiú. Sua ajuda constrói
          novos recomeços para quem só sabe amar.
        </Text>

        <View style={styles.buttons}>
          <Button title="🐾 Quero ajudar agora" onPress={() => onNavigate('doar')} />
          <Button title="Conheça a ONG" variant="ghost" onPress={() => onNavigate('sobre')} />
        </View>

        <View style={styles.proof}>
          <View style={{ flexDirection: 'row' }}>
            {[images.avatar1, images.avatar2, images.avatar3].map((src, i) => (
              <Photo key={i} source={src} style={[styles.avatar, { marginLeft: i ? -12 : 0 }]} />
            ))}
          </View>
          <Text style={styles.proofText}>+500 animais já ganharam uma nova chance com a gente.</Text>
        </View>
      </View>

      <View style={[styles.photoCol, isDesktop && styles.photoColDesktop]}>
        <View>
          <Photo
            source={images.hero}
            style={[styles.photo, isDesktop && styles.photoDesktop]}
            alt="Animal resgatado pela SOS Pet"
          />
          <View style={[styles.seal, isDesktop && styles.sealDesktop]}>
            <Text style={[styles.sealNum, isDesktop && { fontSize: 36, lineHeight: 38 }]}>+500</Text>
            <Text style={styles.sealText}>Animais salvos</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Sua doação ajudará a <Text style={{ color: colors.red }}>transformar</Text> vidas!
            </Text>
          </View>
        </View>
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  inner: { gap: 36 },
  innerDesktop: { flexDirection: 'row', alignItems: 'center', gap: 64 },
  textCol: {},
  textColDesktop: { flex: 1.1 },
  photoCol: { alignItems: 'center', paddingTop: 12, paddingBottom: 16 },
  photoColDesktop: { flex: 1 },

  badge: { alignSelf: 'flex-start', backgroundColor: colors.orange, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, marginBottom: 16 },
  badgeText: { fontFamily: BODY_SEMIBOLD, fontSize: 12, color: colors.dark },
  h1: { fontFamily: DISPLAY, fontSize: 46, lineHeight: 50, color: colors.dark },
  h1Desktop: { fontSize: 80, lineHeight: 82 },
  italic: { fontFamily: DISPLAY_ITALIC, color: colors.brown },
  lead: { fontFamily: BODY, marginTop: 16, fontSize: 16, lineHeight: 24, color: colors.muted, maxWidth: 560 },
  leadDesktop: { fontSize: 19, lineHeight: 30 },
  buttons: { flexDirection: 'row', gap: 12, marginTop: 24, flexWrap: 'wrap' },

  photo: { width: 260, height: 300, borderRadius: 20, borderWidth: 5, borderColor: colors.white },
  photoDesktop: { width: 420, height: 500, borderRadius: 28, borderWidth: 6 },
  seal: { position: 'absolute', top: -22, left: -26, width: 84, height: 84, borderRadius: 42, backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-10deg' }] },
  sealDesktop: { width: 130, height: 130, borderRadius: 65, top: -30, left: -50 },
  sealNum: { fontFamily: DISPLAY, color: colors.white, fontSize: 24, lineHeight: 26 },
  sealText: { fontFamily: BODY_SEMIBOLD, color: colors.white, fontSize: 10, textAlign: 'center', paddingHorizontal: 8 },
  tag: { position: 'absolute', bottom: -16, left: -12, backgroundColor: colors.white, borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8, elevation: 3, shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
  tagText: { fontFamily: BODY_MEDIUM, fontSize: 13, color: colors.dark },

  proof: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 28 },
  avatar: { width: 46, height: 46, borderRadius: 23, borderWidth: 2, borderColor: colors.cream },
  proofText: { flex: 1, fontFamily: BODY, fontSize: 14, lineHeight: 20, color: colors.muted, maxWidth: 320 },
});

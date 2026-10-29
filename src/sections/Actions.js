import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, BODY } from '../theme';
import { images } from '../assets/images';
import Photo from '../components/common/Photo';
import Section from '../components/layout/Section';
import { Eyebrow, Heading } from '../components/common/Typography';
import useBreakpoint from '../hooks/useBreakpoint';

const ACTIONS = [
  { id: 'comida', image: images.acao1, emoji: '🍲', bg: colors.cream, color: colors.brown, alt: 'Comedouro em rota de alimentação', text: 'Garante ração nas rotas de alimentação, que percorrem a cidade todos os dias.' },
  { id: 'resgate', image: images.acao2, emoji: '🚑', bg: colors.brown, color: colors.cream, alt: 'Cachorro resgatado se recuperando', text: 'Ajuda nos resgates e na recuperação de animais em situação grave.' },
  { id: 'saude', image: images.acao3, emoji: '💊', bg: colors.cream, color: colors.brown, alt: 'Cachorro em atendimento veterinário', text: 'Contribui para consultas, medicamentos, antiparasitários e castrações.' },
];

export default function Actions() {
  const { isDesktop, isTablet } = useBreakpoint();

  return (
    <Section bg={colors.white} style={[styles.band, isDesktop && styles.bandDesktop]}>
      <View style={styles.titleRow}>
        <View style={{ flexShrink: 1 }}>
          <Eyebrow>PARA ONDE VAI SUA AJUDA</Eyebrow>
          <Heading>
            SUA DOAÇÃO VIRA <Text style={{ color: colors.red }}>CUIDADO.</Text>
          </Heading>
        </View>
        <Photo
          source={images.mascote}
          style={[styles.mascot, isDesktop && styles.mascotDesktop]}
          emoji="🐕"
          bg="transparent"
        />
      </View>

      <View style={[styles.list, isTablet && styles.listRow]}>
        {ACTIONS.map((a, i) => (
          <View
            key={a.id}
            style={[
              styles.card,
              { backgroundColor: a.bg },
              isTablet && styles.cardRow,
              isDesktop && i === 1 && { transform: [{ translateY: 24 }] },
            ]}
          >
            <Photo
              source={a.image}
              style={[styles.image, isDesktop && styles.imageDesktop]}
              emoji={a.emoji}
              bg={colors.photoBg}
              alt={a.alt}
            />
            <Text style={[styles.text, { color: a.color }]}>{a.text}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  band: { borderTopLeftRadius: 28, borderTopRightRadius: 28 },
  bandDesktop: { borderTopLeftRadius: 56, borderTopRightRadius: 56, paddingBottom: 112 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 },
  mascot: { width: 90, height: 90, borderRadius: 45 },
  mascotDesktop: { width: 130, height: 130, borderRadius: 65 },
  list: { marginTop: 24, gap: 16 },
  listRow: { flexDirection: 'row', alignItems: 'flex-start' },
  card: { borderRadius: 24, padding: 12, paddingBottom: 20, alignItems: 'center' },
  cardRow: { flex: 1 },
  image: { width: '100%', height: 200, borderRadius: 16 },
  imageDesktop: { height: 280 },
  text: { fontFamily: BODY, fontSize: 16, textAlign: 'center', lineHeight: 24, marginTop: 14, paddingHorizontal: 10 },
});

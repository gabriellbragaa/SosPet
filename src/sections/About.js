import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY, DISPLAY_ITALIC, BODY } from '../theme';
import { images } from '../assets/images';
import Photo from '../components/common/Photo';
import Section from '../components/layout/Section';
import { Body, Eyebrow, Heading, Italic } from '../components/common/Typography';
import useBreakpoint from '../hooks/useBreakpoint';

function InfoCard({ icon, title, text, bg, titleColor, textColor, iconBg }) {
  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      <View style={[styles.icon, iconBg && { backgroundColor: iconBg }]}>
        <Text style={{ fontSize: 18 }}>{icon}</Text>
      </View>
      <Text style={[styles.cardTitle, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.cardText, { color: textColor }]}>{text}</Text>
    </View>
  );
}

export default function About() {
  const { isDesktop, isTablet } = useBreakpoint();

  return (
    <Section bg={colors.cream} innerStyle={isDesktop && styles.innerDesktop}>
      <View style={[styles.polaroidWrap, isDesktop && styles.polaroidWrapDesktop]}>
        <View style={styles.polaroidBack} />
        <View style={styles.polaroid}>
          <Photo
            source={images.equipe}
            style={[styles.polaroidImg, isDesktop && styles.polaroidImgDesktop]}
            emoji="👨‍👩‍👧"
            bg={colors.photoBg}
            alt="Equipe de voluntárias da SOS Pet"
          />
          <Text style={[styles.caption, isDesktop && { fontSize: 20 }]}>Nossa equipe</Text>
        </View>
      </View>

      <View style={isDesktop && styles.textColDesktop}>
        <Eyebrow>SOBRE NÓS</Eyebrow>
        <Heading>
          GENTE COMUM FAZENDO UM TRABALHO <Italic>EXTRAORDINÁRIO.</Italic>
        </Heading>
        <Body>
          A SOS Pet Banabuiú atua desde 2018 e, juntos, já conseguimos mudar a vida de mais de 500
          animais em situação de rua. Venha fazer parte e ajude a mudar a vida desses seres que só
          sabem amar!
        </Body>

        <View style={[styles.row, !isTablet && styles.rowStacked]}>
          <InfoCard
            icon="🛡️"
            title="NOSSA MISSÃO"
            text="Proteger, cuidar e dar novas oportunidades a animais que precisam de ajuda."
            bg={colors.brown}
            titleColor={colors.orange}
            textColor={colors.white}
          />
          <InfoCard
            icon="👁️"
            title="NOSSA VISÃO"
            text="Construir uma comunidade mais consciente e responsável com os animais."
            bg={colors.orange}
            titleColor={colors.brown}
            textColor={colors.dark}
            iconBg={colors.dark}
          />
        </View>
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  innerDesktop: { flexDirection: 'row', alignItems: 'center', gap: 64 },
  textColDesktop: { flex: 1.15 },

  polaroidWrap: { alignItems: 'center', marginTop: 8, marginBottom: 28, paddingVertical: 14 },
  polaroidWrapDesktop: { flex: 1, marginBottom: 0 },
  polaroidBack: { position: 'absolute', top: 0, bottom: 0, left: '6%', right: '6%', backgroundColor: colors.brown, borderRadius: 24, transform: [{ rotate: '-4deg' }] },
  polaroid: { backgroundColor: colors.white, padding: 10, paddingBottom: 28, transform: [{ rotate: '3deg' }], elevation: 4, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10 },
  polaroidImg: { width: 240, height: 200 },
  polaroidImgDesktop: { width: 400, height: 340 },
  caption: { fontFamily: DISPLAY_ITALIC, fontSize: 15, marginTop: 8, color: colors.brown, textAlign: 'center' },

  row: { flexDirection: 'row', gap: 12, marginTop: 24 },
  rowStacked: { flexDirection: 'column' },
  card: { flex: 1, borderRadius: 20, padding: 20 },
  icon: { width: 40, height: 40, borderRadius: 10, backgroundColor: colors.orange, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  cardTitle: { fontFamily: DISPLAY, fontSize: 22, lineHeight: 26 },
  cardText: { fontFamily: BODY, fontSize: 15, lineHeight: 22, marginTop: 6 },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, BODY_MEDIUM, BODY_SEMIBOLD } from '../theme';
import { DONATE_STEPS } from '../config/constants';
import { Body, Eyebrow, Heading } from '../components/common/Typography';
import PixCard from '../components/PixCard';
import Section from '../components/layout/Section';
import useBreakpoint from '../hooks/useBreakpoint';

export default function Donate() {
  const { isDesktop } = useBreakpoint();

  return (
    <Section bg={colors.brown} innerStyle={isDesktop && styles.innerDesktop}>
      <View style={isDesktop && styles.textColDesktop}>
        <Eyebrow style={{ color: colors.orange }}>SEJA UM DOADOR</Eyebrow>
        <Heading style={{ color: colors.white }}>Cada real vira ração, remédio e exames.</Heading>
        <Body style={{ color: colors.cream }}>
          Nos ajude a continuar fazendo a diferença na vida desses seres. Doe pelo Pix em segundos —
          qualquer valor importa.
        </Body>

        <View style={{ marginTop: 8 }}>
          {DONATE_STEPS.map((step, i) => (
            <View key={step} style={styles.step}>
              <View style={styles.num}>
                <Text style={styles.numText}>{i + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={isDesktop ? styles.cardColDesktop : styles.cardCol}>
        <PixCard />
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  innerDesktop: { flexDirection: 'row', alignItems: 'center', gap: 64 },
  textColDesktop: { flex: 1 },
  cardCol: { marginTop: 26 },
  cardColDesktop: { width: 440 },
  step: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 14 },
  num: { width: 30, height: 30, borderRadius: 15, backgroundColor: colors.orange, alignItems: 'center', justifyContent: 'center' },
  numText: { fontFamily: BODY_SEMIBOLD, fontSize: 14, color: colors.dark },
  stepText: { fontFamily: BODY_MEDIUM, color: colors.white, fontSize: 16, lineHeight: 22, flex: 1 },
});

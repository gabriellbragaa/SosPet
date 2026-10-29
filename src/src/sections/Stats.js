import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY, BODY_MEDIUM } from '../theme';
import { STATS } from '../config/constants';
import Section from '../components/layout/Section';
import useBreakpoint from '../hooks/useBreakpoint';

export default function Stats() {
  const { isDesktop } = useBreakpoint();

  return (
    <Section bg={colors.cream} style={{ paddingBottom: 0 }}>
      <View style={[styles.card, isDesktop && styles.cardDesktop]}>
        <Text style={[styles.title, isDesktop && styles.titleDesktop]} accessibilityRole="header">
          Juntos, já <Text style={{ color: colors.orange }}>conseguimos:</Text>
        </Text>

        <View style={styles.grid}>
          {STATS.map((stat) => (
            <View
              key={stat.id}
              style={[
                styles.item,
                { flexBasis: isDesktop ? '22%' : '45%' },
                stat.highlight && { backgroundColor: colors.orange },
              ]}
            >
              <Text style={[styles.value, isDesktop && styles.valueDesktop, stat.highlight && { color: colors.dark }]}>
                {stat.value}
              </Text>
              <Text style={[styles.label, stat.highlight && { color: colors.dark }]}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.dark, borderRadius: 24, padding: 20 },
  cardDesktop: { borderRadius: 36, paddingVertical: 48, paddingHorizontal: 44 },
  title: { fontFamily: DISPLAY, color: colors.white, fontSize: 32, lineHeight: 36, marginBottom: 16 },
  titleDesktop: { fontSize: 52, lineHeight: 56, marginBottom: 28 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  item: { flexGrow: 1, backgroundColor: colors.darkCard, borderRadius: 18, padding: 18, minHeight: 120, justifyContent: 'space-between' },
  value: { color: colors.white, fontFamily: DISPLAY, fontSize: 38, lineHeight: 42 },
  valueDesktop: { fontSize: 60, lineHeight: 62 },
  label: { fontFamily: BODY_MEDIUM, color: colors.onDark, fontSize: 14, lineHeight: 19, marginTop: 6 },
});

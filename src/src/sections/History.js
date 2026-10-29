import React, { useState } from 'react';
import { LayoutAnimation, Linking, Platform, Pressable, StyleSheet, Text, UIManager, View } from 'react-native';
import { colors, DISPLAY, DISPLAY_ITALIC, BODY, BODY_MEDIUM, BODY_SEMIBOLD } from '../theme';
import Photo from '../components/common/Photo';
import Button from '../components/common/Button';
import Section from '../components/layout/Section';
import useBreakpoint from '../hooks/useBreakpoint';
import { Body, Eyebrow, Heading } from '../components/common/Typography';
import { LINKS } from '../config/constants';
import {
  HISTORY_INTRO,
  HISTORY_ORIGIN,
  HISTORY_QUOTE,
  HISTORY_TIMELINE,
  HISTORY_NOTE,
  HISTORY_PEOPLE,
  HISTORY_PARTNERS,
  HISTORY_CLOSING,
  HISTORY_FULL,
} from '../config/history';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function openLink(url) {
  if (!url) return;
  Linking.openURL(url).catch(() => {});
}

function ExternalLink({ label, url }) {
  return (
    <Pressable
      onPress={() => openLink(url)}
      accessibilityRole="link"
      accessibilityHint="Abre em outro aplicativo"
      hitSlop={8}
      style={({ pressed }) => [styles.link, pressed && { opacity: 0.6 }]}
    >
      <Text style={styles.linkText}>{label} ↗</Text>
    </Pressable>
  );
}

function TimelineItem({ item, isLast }) {
  return (
    <View style={styles.tlRow}>
      <View style={styles.tlRail}>
        <View style={styles.tlDot} />
        {!isLast && <View style={styles.tlLine} />}
      </View>

      <View style={styles.tlBody}>
        <Text style={styles.tlLabel}>{item.label}</Text>
        <Text style={styles.tlTitle} accessibilityRole="header">
          {item.title}
        </Text>
        <Text style={styles.tlText}>{item.text}</Text>

        {item.image !== undefined && (
          <Photo source={item.image} style={styles.tlImage} emoji="📷" bg={colors.photoBg} alt={item.alt} />
        )}

        {item.facts && (
          <View style={styles.facts}>
            {item.facts.map((f) => (
              <View key={f} style={styles.fact}>
                <Text style={styles.factText}>{f}</Text>
              </View>
            ))}
          </View>
        )}

        {item.link && <ExternalLink label={item.link.label} url={item.link.url} />}
      </View>
    </View>
  );
}

export default function History() {
  const { isDesktop } = useBreakpoint();
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((v) => !v);
  };

  const extras = (
    <>
        <View style={styles.note}>
          <Text style={styles.noteTitle}>Por que “cerca de 100 animais”?</Text>
          <Text style={styles.noteText}>{HISTORY_NOTE}</Text>
        </View>

        <Text style={styles.groupTitle}>Quem construiu essa história</Text>
        <View style={styles.chips}>
          {HISTORY_PEOPLE.map((p) => (
            <View key={p} style={styles.chip}>
              <Text style={styles.chipText}>{p}</Text>
            </View>
          ))}
          <View style={styles.chip}>
            <Text style={styles.chipText}>e muitas outras voluntárias</Text>
          </View>
        </View>

        <Text style={styles.groupTitle}>Parceiros</Text>
        <View style={styles.chips}>
          {HISTORY_PARTNERS.map((p) => (
            <View key={p} style={[styles.chip, styles.chipPartner]}>
              <Text style={[styles.chipText, { color: colors.white }]}>{p}</Text>
            </View>
          ))}
        </View>
    </>
  );

  return (
    <Section bg={colors.cream} innerStyle={isDesktop && styles.innerDesktop}>
      <View style={isDesktop && styles.colLeft}>
        <Eyebrow>NOSSA HISTÓRIA</Eyebrow>
        <Heading>NADA COMEÇA DO ZERO.</Heading>
        <Body>{HISTORY_INTRO}</Body>

        <View style={styles.origin}>
          <Photo
            source={HISTORY_ORIGIN.image}
            style={[styles.originImg, isDesktop && { height: 280 }]}
            emoji="👭"
            bg={colors.photoBg}
            alt={HISTORY_ORIGIN.alt}
          />
          <Text style={styles.originCaption}>{HISTORY_ORIGIN.caption}</Text>
          <Text style={styles.originText}>{HISTORY_ORIGIN.text}</Text>
        </View>

        <View style={styles.quoteCard}>
          <View style={styles.quoteHead}>
            <Photo source={HISTORY_QUOTE.image} style={styles.aisha} emoji="🐶" bg={colors.cream} alt={HISTORY_QUOTE.alt} />
            <Text style={styles.quoteContext}>{HISTORY_QUOTE.context}</Text>
          </View>
          <Text style={[styles.quote, isDesktop && { fontSize: 32, lineHeight: 38 }]}>“{HISTORY_QUOTE.quote}”</Text>
        </View>

        {isDesktop && extras}
      </View>

      <View style={isDesktop ? styles.colRight : null}>
        <View style={[styles.timeline, isDesktop && { marginTop: 0 }]}>
          {HISTORY_TIMELINE.map((item, i) => (
            <TimelineItem key={item.id} item={item} isLast={i === HISTORY_TIMELINE.length - 1} />
          ))}
        </View>

        {!isDesktop && extras}

        {expanded && (
          <View style={styles.full}>
            {HISTORY_FULL.map((p, i) => (
              <Text key={i} style={styles.fullText}>
                {p}
              </Text>
            ))}
          </View>
        )}
        <Pressable
          onPress={toggle}
          accessibilityRole="button"
          accessibilityState={{ expanded }}
          style={({ pressed }) => [styles.more, pressed && { opacity: 0.7 }]}
        >
          <Text style={styles.moreText}>{expanded ? 'Mostrar menos' : 'Ler a história completa'}</Text>
        </Pressable>

        <Text style={styles.closing}>{HISTORY_CLOSING}</Text>

        <View style={styles.ctaRow}>
          <Button title="Acompanhe no Instagram" onPress={() => openLink(LINKS.instagram)} />
          <Button title="Fale no WhatsApp" variant="ghost" onPress={() => openLink(LINKS.whatsapp)} />
        </View>
      </View>
    </Section>
  );
}

const hardShadow = Platform.select({
  web: { boxShadow: `0 6px 0 ${colors.brown}` },
  default: { borderBottomWidth: 6, borderBottomColor: colors.brown },
});

const styles = StyleSheet.create({
  innerDesktop: { flexDirection: 'row', alignItems: 'flex-start', gap: 64 },
  colLeft: { flex: 1 },
  colRight: { flex: 1.1, paddingTop: 12 },

  origin: { marginTop: 22, backgroundColor: colors.white, borderRadius: 20, padding: 12 },
  originImg: { width: '100%', height: 200, borderRadius: 14 },
  originCaption: { fontFamily: DISPLAY_ITALIC, fontSize: 16, color: colors.brown, marginTop: 10, marginHorizontal: 4 },
  originText: { fontFamily: BODY, fontSize: 15, lineHeight: 23, color: colors.text, marginTop: 6, marginHorizontal: 4, marginBottom: 4 },

  quoteCard: { marginTop: 18, backgroundColor: colors.orange, borderRadius: 24, padding: 20, ...hardShadow },
  quoteHead: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  aisha: { width: 56, height: 56, borderRadius: 28, borderWidth: 3, borderColor: colors.white },
  quoteContext: { flex: 1, fontFamily: BODY_MEDIUM, fontSize: 14, lineHeight: 20, color: colors.dark },
  quote: { fontFamily: DISPLAY, fontSize: 26, lineHeight: 31, color: colors.dark, marginTop: 14 },

  timeline: { marginTop: 32 },
  tlRow: { flexDirection: 'row' },
  tlRail: { width: 28, alignItems: 'center' },
  tlDot: { width: 16, height: 16, borderRadius: 8, backgroundColor: colors.red, borderWidth: 3, borderColor: colors.cream, marginTop: 4 },
  tlLine: { flex: 1, width: 2, backgroundColor: colors.brown, opacity: 0.35, marginVertical: 2 },
  tlBody: { flex: 1, paddingLeft: 10, paddingBottom: 28 },
  tlLabel: { fontFamily: DISPLAY, fontSize: 30, lineHeight: 32, color: colors.brown },
  tlTitle: { fontFamily: BODY_SEMIBOLD, fontSize: 17, lineHeight: 23, color: colors.dark, marginTop: 4 },
  tlText: { fontFamily: BODY, fontSize: 15, lineHeight: 23, color: colors.text, marginTop: 6 },
  tlImage: { width: '100%', height: 170, borderRadius: 14, marginTop: 12 },

  facts: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  fact: { backgroundColor: colors.dark, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 },
  factText: { fontFamily: BODY_MEDIUM, fontSize: 13, color: colors.orange },

  link: { alignSelf: 'flex-start', marginTop: 12, paddingVertical: 6 },
  linkText: { fontFamily: BODY_SEMIBOLD, fontSize: 14, color: colors.red, textDecorationLine: 'underline' },

  note: { marginTop: 24, backgroundColor: colors.white, borderRadius: 16, padding: 16, borderLeftWidth: 4, borderLeftColor: colors.orange },
  noteTitle: { fontFamily: BODY_SEMIBOLD, fontSize: 15, color: colors.dark },
  noteText: { fontFamily: BODY, fontSize: 14, lineHeight: 21, color: colors.text, marginTop: 6 },

  groupTitle: { fontFamily: DISPLAY, fontSize: 22, color: colors.dark, marginTop: 28, marginBottom: 10 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: colors.white, borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8, borderWidth: 1, borderColor: colors.border },
  chipPartner: { backgroundColor: colors.brown, borderColor: colors.brown },
  chipText: { fontFamily: BODY_MEDIUM, fontSize: 14, color: colors.dark },

  full: { marginTop: 24, gap: 14 },
  fullText: { fontFamily: BODY, fontSize: 15, lineHeight: 24, color: colors.text },
  more: { alignSelf: 'flex-start', marginTop: 20, borderWidth: 2, borderColor: colors.dark, borderRadius: 999, paddingHorizontal: 18, paddingVertical: 10, minHeight: 44, justifyContent: 'center' },
  moreText: { fontFamily: BODY_SEMIBOLD, fontSize: 15, color: colors.dark },

  closing: { fontFamily: DISPLAY_ITALIC, fontSize: 20, lineHeight: 27, color: colors.brown, marginTop: 28 },
  ctaRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 18 },
});

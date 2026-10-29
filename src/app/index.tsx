// src/app/index.tsx
import React, { useCallback, useRef } from 'react';
import { LayoutChangeEvent, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../theme';
import Header from '../components/layout/Header';
import Marquee from '../components/layout/Marquee';
import Footer from '../components/layout/Footer';
import { Hero, Stats, About, History, Actions, Donate } from '../sections';

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const positions = useRef<Record<string, number>>({});

  const registerSection = (key: string) => (e: LayoutChangeEvent) => {
    positions.current[key] = e.nativeEvent.layout.y;
  };

  const scrollTo = useCallback((key: string) => {
    // O Header fica fora do ScrollView, então a posição da seção já é o ponto exato:
    // descontar a altura do header fazia aparecer o fim da seção anterior.
    const y = positions.current[key] ?? 0;
    scrollRef.current?.scrollTo({ y, animated: true });
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.cream} />
      <Header onNavigate={scrollTo} />

      {/* Conteúdo em largura total: cada seção pinta o fundo de ponta a ponta
          e centraliza o próprio conteúdo (ver components/layout/Section) */}
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View onLayout={registerSection('inicio')}>
          <Hero onNavigate={scrollTo} />
        </View>

        <Marquee />
        <Stats />

        <View onLayout={registerSection('sobre')}>
          <About />
        </View>

        <View onLayout={registerSection('historia')}>
          <History />
        </View>

        <View onLayout={registerSection('acoes')}>
          <Actions />
        </View>

        <View onLayout={registerSection('doar')}>
          <Donate />
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  content: { flexGrow: 1, width: '100%', overflow: 'hidden' },
});

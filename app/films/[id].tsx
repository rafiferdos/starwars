import { COLORS } from '@/constants/colors'
import { IFilms } from '@/types/films'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

const Page = () => {
  const { id } = useLocalSearchParams()
  const [film, setFilm] = useState<IFilms | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchFilmDetails = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://swapi.dev/api/films/${id}/`)
        const data = await response.json()
        setFilm(data)
      } catch (error) {
        console.error('Error fetching film details:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchFilmDetails()
  }, [id])

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={COLORS.gold} />
        <Text style={styles.loadingText}>Loading film data...</Text>
      </View>
    )
  }

  if (!film) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFoundIcon}>🎬</Text>
        <Text style={styles.notFoundText}>Film not found</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero */}
      <View style={styles.hero}>
        <View style={styles.episodeBadge}>
          <Text style={styles.episodeLabel}>EPISODE</Text>
          <Text style={styles.episodeNumber}>{toRoman(film.episode_id)}</Text>
        </View>
        <Text style={styles.title}>{film.title}</Text>
        <Text style={styles.releaseDate}>📅 {film.release_date}</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Info Cards */}
      <View style={styles.infoRow}>
        <InfoCard label='Director' value={film.director} />
        <InfoCard label='Producer' value={film.producer} />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Opening Crawl */}
      <View style={styles.crawlContainer}>
        <Text style={styles.sectionTitle}>Opening Crawl</Text>
        <Text style={styles.crawlText}>{film.opening_crawl}</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Stats */}
      <Text style={styles.sectionTitle}>Universe Stats</Text>
      <View style={styles.statsGrid}>
        <StatBadge label='Characters' count={film.characters.length} />
        <StatBadge label='Planets' count={film.planets.length} />
        <StatBadge label='Starships' count={film.starships.length} />
        <StatBadge label='Vehicles' count={film.vehicles.length} />
        <StatBadge label='Species' count={film.species.length} />
      </View>
    </ScrollView>
  )
}

const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoCard}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
)

const StatBadge = ({ label, count }: { label: string; count: number }) => (
  <View style={styles.statBadge}>
    <Text style={styles.statCount}>{count}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
)

const toRoman = (num: number): string => {
  const map: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]
  return map.reduce((acc, [val, sym]) => {
    while (num >= val) {
      acc += sym
      num -= val
    }
    return acc
  }, '')
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark
  },
  content: {
    paddingBottom: 40
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    gap: 12
  },
  loadingText: {
    color: COLORS.inactiveTab,
    fontSize: 14,
    marginTop: 8
  },
  notFoundIcon: {
    fontSize: 48
  },
  notFoundText: {
    color: COLORS.inactiveTab,
    fontSize: 18
  },

  // Hero
  hero: {
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 28,
    paddingHorizontal: 24,
    backgroundColor: '#111'
  },
  episodeBadge: {
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: 'center',
    marginBottom: 18
  },
  episodeLabel: {
    color: COLORS.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3
  },
  episodeNumber: {
    color: COLORS.gold,
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 12
  },
  releaseDate: {
    color: COLORS.inactiveTab,
    fontSize: 13,
    letterSpacing: 0.5
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: '#2a2a2a',
    marginHorizontal: 20,
    marginVertical: 20
  },

  // Info Cards
  infoRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#242424',
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.gold
  },
  infoLabel: {
    color: COLORS.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4
  },
  infoValue: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '500'
  },

  // Opening Crawl
  crawlContainer: {
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    marginBottom: 12,
    paddingHorizontal: 20
  },
  crawlText: {
    color: '#ccc',
    fontSize: 15,
    lineHeight: 24,
    fontStyle: 'italic',
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a2a2a'
  },

  // Stats
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 20
  },
  statBadge: {
    backgroundColor: '#242424',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: 'center',
    minWidth: 90,
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: COLORS.gold
  },
  statCount: {
    color: COLORS.gold,
    fontSize: 26,
    fontWeight: 'bold'
  },
  statLabel: {
    color: COLORS.inactiveTab,
    fontSize: 11,
    marginTop: 2,
    letterSpacing: 0.5
  }
})

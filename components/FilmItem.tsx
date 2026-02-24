import { COLORS } from '@/constants/colors'
import { IFilms } from '@/types/films'
import { Link, type Href } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const FilmItem: React.FC<{ item: IFilms }> = ({ item }) => {

  const id = item.url.split('/').filter(Boolean).pop() || ''
  console.log("🚀 ~ FilmItem ~ id:", id)

  return (
    <Link href={`/films/${item.episode_id}` as Href} asChild>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.container}>
          {/* Header row: title + episode badge */}
          <View style={styles.header}>
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeLabel}>EP</Text>
              <Text style={styles.badgeNumber}>{item.episode_id}</Text>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Meta info */}
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Director</Text>
              <Text style={styles.metaValue}>{item.director}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Released</Text>
              <Text style={styles.metaValue}>{item.release_date}</Text>
            </View>
          </View>

          {/* Opening crawl snippet */}
          <Text style={styles.crawl} numberOfLines={3}>
            {item.opening_crawl}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default FilmItem

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.gold,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.gold,
    letterSpacing: 0.5
  },
  badge: {
    alignItems: 'center',
    backgroundColor: COLORS.gold,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    minWidth: 42
  },
  badgeLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: COLORS.dark,
    letterSpacing: 1
  },
  badgeNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    lineHeight: 22
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#444',
    marginHorizontal: 16
  },
  metaRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 24
  },
  metaItem: {
    flexShrink: 1
  },
  metaLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.gold,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 2
  },
  metaValue: {
    fontSize: 13,
    color: '#ccc'
  },
  crawl: {
    fontSize: 12,
    color: '#888',
    lineHeight: 18,
    fontStyle: 'italic',
    paddingHorizontal: 16,
    paddingBottom: 14
  }
})

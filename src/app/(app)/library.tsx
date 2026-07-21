import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { ExerciseCard } from "../../components/exercise-card";
import { FilterPill } from "../../components/filter-pill";
import { ThemedText } from "../../components/themed-text";
import { ThemedView } from "../../components/themed-view";

const FILTERS = ["All", "Strength", "Cardio", "Flexibility"] as const;

const MY_EXERCISES = [
  {
    title: "Push-ups",
    category: "Strength",
    duration: "10 min",
    level: "Beginner",
    completed: true,
  },
  {
    title: "Plank Hold",
    category: "Strength",
    duration: "5 min",
    level: "Intermediate",
    completed: true,
  },
];

const PURCHASED_EXERCISES = [
  {
    title: "Pilates Core",
    category: "Flexibility",
    duration: "20 min",
    level: "Intermediate",
    completed: true,
  },
  {
    title: "Battle Ropes",
    category: "Cardio",
    duration: "10 min",
    level: "Advanced",
    completed: true,
  },
];

export default function LibraryScreen() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof FILTERS)[number]>("All");
  const [search, setSearch] = useState("");

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <ThemedText style={styles.title}>Library</ThemedText>

          <View style={styles.searchWrap}>
            <Ionicons name="search" size={18} color="#8E8E93" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search library"
              placeholderTextColor="#8E8E93"
              value={search}
              onChangeText={setSearch}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
          >
            {FILTERS.map((filter) => (
              <FilterPill
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onPress={() => setActiveFilter(filter)}
              />
            ))}
          </ScrollView>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <ThemedText style={styles.sectionTitle}>
                My Exercises
              </ThemedText>
              <TouchableOpacity>
                <ThemedText style={styles.seeAll}>See all</ThemedText>
              </TouchableOpacity>
            </View>

            {MY_EXERCISES.map((exercise) => (
              <ExerciseCard key={exercise.title} {...exercise} />
            ))}
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <ThemedText style={styles.sectionTitle}>
                Purchased Exercises
              </ThemedText>
              <TouchableOpacity>
                <ThemedText style={styles.seeAll}>See all</ThemedText>
              </TouchableOpacity>
            </View>

            {PURCHASED_EXERCISES.map((exercise) => (
              <ExerciseCard key={exercise.title} {...exercise} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  safeArea: { flex: 1 },
  scrollView: { flex: 1 },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111111",
    paddingHorizontal: 20,
    paddingTop: 8,
    marginBottom: 16,
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginHorizontal: 20,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E2E5",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#111111",
  },
  filterRow: {
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 24,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111111",
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2F80ED",
  },
});
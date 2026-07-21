import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { StatSummaryCard } from "../../components/stat-summary-card";
import { ThemedText } from "../../components/themed-text";
import { ThemedView } from "../../components/themed-view";

export default function WorkoutCompleteScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.iconWrap}>
          <View style={styles.iconOuter}>
            <View style={styles.iconInner}>
              <Ionicons name="checkmark" size={44} color="#FFFFFF" />
            </View>
          </View>
        </View>

        <ThemedText style={styles.title}>Workout Complete!</ThemedText>
        <ThemedText style={styles.subtitle}>Back Extensions</ThemedText>

        <View style={styles.grid}>
          <StatSummaryCard
            icon="time"
            iconColor="#2F80ED"
            value="00:20"
            label="Duration"
          />
          <StatSummaryCard
            icon="scan-circle"
            iconColor="#34C759"
            value="85%"
            label="Accuracy"
          />
          <StatSummaryCard
            icon="flame"
            iconColor="#F5A623"
            value="2"
            label="Calories"
          />
          <StatSummaryCard
            icon="heart"
            iconColor="#E74C3C"
            value="103"
            label="Avg HR"
          />
          <StatSummaryCard
            icon="body"
            iconColor="#9B59B6"
            value="18"
            label="Reps"
          />
          <StatSummaryCard
            icon="sparkles"
            iconColor="#F5A623"
            value="+122"
            label="XP Earned"
          />
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  safeArea: { flex: 1, paddingHorizontal: 20 },
  iconWrap: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 32,
  },
  iconOuter: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#E8F8ED",
    alignItems: "center",
    justifyContent: "center",
  },
  iconInner: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#34C759",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111111",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
    marginBottom: 28,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },
});
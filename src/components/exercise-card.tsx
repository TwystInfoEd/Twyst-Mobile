import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./themed-text";

export function ExerciseCard({
  title,
  category,
  duration,
  level,
  completed = false,
}: {
  title: string;
  category: string;
  duration: string;
  level: string;
  completed?: boolean;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.textCol}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.category}>{category}</ThemedText>
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time" size={14} color="#2F80ED" />
            <ThemedText style={styles.metaText}>{duration}</ThemedText>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="bar-chart" size={14} color="#2F80ED" />
            <ThemedText style={styles.metaText}>{level}</ThemedText>
          </View>
        </View>
      </View>

      {completed && (
        <View style={styles.badge}>
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  textCol: { flex: 1 },
  title: { fontSize: 17, fontWeight: "700", color: "#111111", marginBottom: 2 },
  category: { fontSize: 14, color: "#8E8E93", marginBottom: 8 },
  metaRow: { flexDirection: "row", gap: 16 },
  metaItem: { flexDirection: "row", alignItems: "center", gap: 4 },
  metaText: { fontSize: 13, color: "#3C3C43" },
  badge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#F5A623",
    alignItems: "center",
    justifyContent: "center",
  },
});
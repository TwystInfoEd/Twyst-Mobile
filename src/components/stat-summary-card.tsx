import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./themed-text";

export function StatSummaryCard({
  icon,
  iconColor,
  value,
  label,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  value: string;
  label: string;
}) {
  return (
    <View style={styles.card}>
      <Ionicons name={icon} size={22} color={iconColor} style={styles.icon} />
      <ThemedText style={styles.value}>{value}</ThemedText>
      <ThemedText style={styles.label}>{label}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: "center",
  },
  icon: { marginBottom: 10 },
  value: { fontSize: 22, fontWeight: "800", color: "#111111", marginBottom: 4 },
  label: { fontSize: 13, color: "#8E8E93" },
});
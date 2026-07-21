import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./themed-text";

export function OverviewCard({
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
      <Ionicons name={icon} size={20} color={iconColor} style={styles.icon} />
      <ThemedText style={styles.value}>{value}</ThemedText>
      <ThemedText style={styles.label}>{label}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 14,
    padding: 16,
  },
  icon: { marginBottom: 8 },
  value: { fontSize: 20, fontWeight: "800", color: "#111111", marginBottom: 2 },
  label: { fontSize: 13, color: "#8E8E93" },
});
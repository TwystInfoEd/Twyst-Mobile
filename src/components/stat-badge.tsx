import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./themed-text";

const ICONS = { flame: "flame", sparkle: "sparkles" } as const;

export function StatBadge({
  icon,
  value,
  color,
}: {
  icon: keyof typeof ICONS;
  value: string;
  color: string;
}) {
  return (
    <View style={styles.badge}>
      <Ionicons name={ICONS[icon]} size={16} color={color} />
      <ThemedText style={styles.value}>{value}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E9E9EC",
    backgroundColor: "#FFFFFF",
  },
  value: { fontSize: 14, fontWeight: "700", color: "#111111" },
});
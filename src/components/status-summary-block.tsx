import { View, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";

export function StatusSummaryBlock({
  label,
  value,
  footnote,
  pill,
}: {
  label: string;
  value: string;
  footnote: string;
  pill?: { text: string; color: string };
}) {
  return (
    <View style={styles.card}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <View style={styles.valueRow}>
        <ThemedText style={styles.value}>{value}</ThemedText>
        {pill && (
          <View style={[styles.pill, { backgroundColor: pill.color + "22" }]}>
            <ThemedText style={[styles.pillText, { color: pill.color }]}>
              {pill.text}
            </ThemedText>
          </View>
        )}
      </View>
      <ThemedText style={styles.footnote}>{footnote}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
    minHeight: 120,
  },
  label: { fontSize: 13, color: "#8E8E93", marginBottom: 10 },
  valueRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  value: { fontSize: 22, fontWeight: "800", color: "#111111" },
  pill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  pillText: { fontSize: 12, fontWeight: "700" },
  footnote: { fontSize: 13, color: "#8E8E93", marginTop: 12 },
});
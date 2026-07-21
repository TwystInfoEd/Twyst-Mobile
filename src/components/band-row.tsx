import { View, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import type { BandConnection } from "../hooks/use-motion-status";

const CONNECTION_COLOR: Record<BandConnection, string> = {
  connected: "#34C759",
  stale: "#F5A623",
  unknown: "#8E8E93",
  offline: "#E74C3C",
};

const CONNECTION_LABEL: Record<BandConnection, string> = {
  connected: "Connected",
  stale: "Stale",
  unknown: "Unknown",
  offline: "Offline",
};

export function BandRow({
  name,
  connection,
  battery,
}: {
  name: string;
  connection: BandConnection;
  battery?: string;
}) {
  const color = CONNECTION_COLOR[connection];

  return (
    <View style={styles.row}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <View style={styles.textCol}>
        <ThemedText style={styles.name}>{name}</ThemedText>
        <ThemedText style={styles.status}>
          {CONNECTION_LABEL[connection]}
          {battery ? ` · ${battery}` : ""}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#F7F7F9",
    borderRadius: 14,
    padding: 16,
  },
  dot: { width: 10, height: 10, borderRadius: 5 },
  textCol: { flex: 1 },
  name: { fontSize: 15, fontWeight: "700", color: "#111111", marginBottom: 2 },
  status: { fontSize: 13, color: "#8E8E93" },
});
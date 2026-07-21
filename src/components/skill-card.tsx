import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./themed-text";

function lighten(hex: string, percent: number) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.min(255, (num >> 16) + amt);
  const g = Math.min(255, ((num >> 8) & 0x00ff) + amt);
  const b = Math.min(255, (num & 0x0000ff) + amt);
  return `rgb(${r}, ${g}, ${b})`;
}

export function SkillCard({
  title,
  progress,
  completed,
  total,
  color,
  icon,
  locked = false,
}: {
  title: string;
  progress: number;
  completed: number;
  total: number;
  color: string;
  icon: "human" | "yoga" | "dumbbell" | "fire" | "lock";
  locked?: boolean;
}) {
  const bgColor = locked ? lighten(color, 45) : color;

  return (
    <View style={styles.card}>
      <View style={[styles.top, { backgroundColor: bgColor }, locked && styles.topLocked]}>
        {icon === "lock" ? (
          <Ionicons name="lock-closed" size={28} color="rgba(255,255,255,0.9)" />
        ) : (
          <>
            <MaterialCommunityIcons name={icon} size={30} color="#FFFFFF" />
            <ThemedText style={styles.percent}>{progress}%</ThemedText>
          </>
        )}
      </View>

      {!locked && (
        <View style={styles.bottom}>
          <ThemedText style={styles.title}>{title}</ThemedText>
          <View style={styles.metaRow}>
            <Ionicons name="checkmark-circle" size={14} color="#34C759" />
            <ThemedText style={styles.meta}>
              {completed}/{total}
            </ThemedText>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ECECEC",
    backgroundColor: "#FFFFFF",
  },
  top: {
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  topLocked: { height: 150 },
  percent: { color: "#FFFFFF", fontWeight: "800", fontSize: 15 },
  bottom: { padding: 12 },
  title: { fontSize: 15, fontWeight: "700", color: "#111111", marginBottom: 4 },
  metaRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  meta: { fontSize: 12, color: "#8E8E93" },
});
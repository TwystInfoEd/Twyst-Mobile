import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "./themed-text";

const SIZE = 72;
const STROKE = 7;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ProgressRing({ current, goal }: { current: number; goal: number }) {
  const pct = Math.min(current / goal, 1);
  const offset = CIRCUMFERENCE * (1 - pct);

  return (
    <View style={{ width: SIZE, height: SIZE }}>
      <Svg width={SIZE} height={SIZE}>
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#E5E5EA"
          strokeWidth={STROKE}
          fill="none"
        />
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#34C759"
          strokeWidth={STROKE}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
          rotation="-90"
          origin={`${SIZE / 2}, ${SIZE / 2}`}
        />
      </Svg>
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.ringTextWrap}>
          <ThemedText style={styles.ringValue}>{current}</ThemedText>
          <ThemedText style={styles.ringGoal}>/ {goal}</ThemedText>
        </View>
      </View>
    </View>
  );
}

export function DailyGoalCard({
  currentXP,
  goalXP,
}: {
  currentXP: number;
  goalXP: number;
}) {
  const pct = Math.min((currentXP / goalXP) * 100, 100);

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.textCol}>
          <View style={styles.titleRow}>

            <ThemedText style={styles.title}>Daily Goal</ThemedText>
          </View>
          <ThemedText style={styles.subtitle}>
            Earn {goalXP} XP to complete your goal!
          </ThemedText>
        </View>
        <ProgressRing current={currentXP} goal={goalXP} />
      </View>

      <View style={styles.track}>
        <View style={[styles.fill, { width: `${pct}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#ECECEC",
    padding: 18,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  textCol: { flex: 1, paddingRight: 12 },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 6 },
  title: { fontSize: 17, fontWeight: "700", color: "#111111" },
  subtitle: { fontSize: 13, color: "#8E8E93" },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E5E5EA",
    overflow: "hidden",
  },
  fill: { height: "100%", backgroundColor: "#34C759", borderRadius: 4 },
  ringTextWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ringValue: { fontSize: 20, fontWeight: "800", color: "#111111" },
  ringGoal: { fontSize: 11, color: "#8E8E93", marginTop: -2 },
});
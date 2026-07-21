import { StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";

interface DailyGoalCardProps {
  currentXP: number;
  goalXP: number;
}

export function DailyGoalCard({ currentXP, goalXP }: DailyGoalCardProps) {
  const progress = currentXP / goalXP;
  const circumference = 2 * Math.PI * 22;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Goal</Text>
      </View>

      <Text style={styles.description}>
        Earn {goalXP} XP to complete your goal!
      </Text>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, { width: `${progress * 100}%` }]}
          />
        </View>

        <View style={styles.circularProgress}>
          <Svg width={56} height={56} viewBox="0 0 56 56">
            <Circle
              cx={28}
              cy={28}
              r={22}
              stroke="#E0E0E0"
              strokeWidth={4}
              fill="none"
            />
            <Circle
              cx={28}
              cy={28}
              r={22}
              stroke="#4CAF50"
              strokeWidth={4}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform={`rotate(-90, 28, 28)`}
            />
          </Svg>
          <View style={styles.circularText}>
            <Text style={styles.circularValue}>{currentXP}</Text>
            <Text style={styles.circularTotal}>/ {goalXP}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
  },
  description: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginRight: 16,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 4,
  },
  circularProgress: {
    position: "relative",
  },
  circularText: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  circularValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
  },
  circularTotal: {
    fontSize: 10,
    color: "#666666",
  },
});

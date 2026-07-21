import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function StatChip({
  icon,
  label,
  variant = "default",
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string | null;
  variant?: "default" | "course";
}) {
  return (
    <View
      style={[
        styles.chip,
        variant === "course" && styles.courseChip,
      ]}
    >
      <Ionicons
        name={icon}
        size={16}
        color={variant === "course" ? "#F5A623" : "#3C3C43"}
      />
      {label && <View style={styles.labelWrap} />}
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E2E5",
    alignItems: "center",
    justifyContent: "center",
  },
  courseChip: {
    borderColor: "#F5A623",
    backgroundColor: "#FFF7E8",
  },
  labelWrap: {},
});
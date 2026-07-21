import { TouchableOpacity, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";

export function FilterPill({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.pill, active && styles.pillActive]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <ThemedText style={[styles.label, active && styles.labelActive]}>
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#2F80ED",
    backgroundColor: "#FFFFFF",
  },
  pillActive: {
    backgroundColor: "#2F80ED",
    borderColor: "#2F80ED",
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2F80ED",
  },
  labelActive: {
    color: "#FFFFFF",
  },
});
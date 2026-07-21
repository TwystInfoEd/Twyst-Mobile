import { TouchableOpacity, View, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";

export function SegmentedToggle<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: T }[];
  value: T;
  onChange: (val: T) => void;
}) {
  return (
    <View style={styles.wrap}>
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <TouchableOpacity
            key={opt.value}
            style={[styles.option, active && styles.optionActive]}
            onPress={() => onChange(opt.value)}
            activeOpacity={0.8}
          >
            <ThemedText style={[styles.label, active && styles.labelActive]}>
              {opt.label}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    backgroundColor: "#F2F2F5",
    borderRadius: 12,
    padding: 4,
  },
  option: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 9,
  },
  optionActive: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  label: { fontSize: 13, fontWeight: "600", color: "#8E8E93" },
  labelActive: { color: "#111111" },
});
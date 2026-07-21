import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { UrangutanIcon } from "./urangutan-icon";

const OVERLAP = 40; // how far the illustration dips below the blue header

export function ProfileHeader() {
  return (
    <View style={styles.header}>
      <SafeAreaView edges={["top"]}>
        <TouchableOpacity style={styles.settingsBtn} activeOpacity={0.7}>
          <Ionicons name="settings-outline" size={22} color="#1C1C1E" />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.illustrationWrap}>
        <UrangutanIcon width={220} height={328} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: "#5EA8E0",
  },
  settingsBtn: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationWrap: {
    position: "absolute",
    bottom: -OVERLAP,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 2,
  },
});
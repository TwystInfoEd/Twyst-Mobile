import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackgroundDecoration } from "../../components/background-decoration";
import { Button } from "../../components/button";
import { AppIcon } from "../../components/maimuta-icon";
import { ThemedText } from "../../components/themed-text";
import { ThemedView } from "../../components/themed-view";
import { TwystLogo } from "../../components/twyst-logo";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <BackgroundDecoration />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.heroSection}>
            <AppIcon />
            <TwystLogo width={200} />
            <ThemedText style={styles.tagline}>
              Intelligence in motion
            </ThemedText>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Get Started"
              variant="primary"
              onPress={() => router.push("/register")}
            />
            <Button
              title="I already have an account"
              variant="secondary"
              onPress={() => router.push("/login")}
            />
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  heroSection: {
    alignItems: "center",
    gap: 16,
    marginTop: 40,
  },
  tagline: {
    fontSize: 14,
    color: "#888888",
    marginTop: 8,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 20,
  },
});

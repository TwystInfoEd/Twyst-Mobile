import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Path, Svg } from "react-native-svg";
import { Button } from "../../components/button";
import { InputField } from "../../components/input-field";
import { SocialButton } from "../../components/social-button";
import { ThemedText } from "../../components/themed-text";
import { ThemedView } from "../../components/themed-view";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth={2}
          >
            <Path
              d="M19 12H5M12 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>

        <View style={styles.content}>
          <ThemedText style={styles.title}>Login</ThemedText>

          <View style={styles.form}>
            <InputField label="Email" placeholder="Ex. fox@twyst.com" />
            <InputField
              label="Password"
              placeholder="A strong password"
              secureTextEntry
            />

            <TouchableOpacity style={styles.forgotPassword}>
              <ThemedText style={styles.forgotPasswordText}>
                Forgot password?
              </ThemedText>
            </TouchableOpacity>

            <Button
              title="Login"
              variant="primary"
              onPress={() => router.replace("/(app)")}
            />
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialButtons}>
            <SocialButton provider="Google" />
            <SocialButton provider="Apple" />
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
  backButton: {
    padding: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 32,
    color: "#000000",
  },
  form: {
    marginBottom: 32,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#027FE3",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#888888",
  },
  socialButtons: {
    gap: 12,
  },
});

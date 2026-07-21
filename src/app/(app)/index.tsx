import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DailyGoalCard } from "../../components/daily-goal-card";
import { SkillCard } from "../../components/skill-card";
import { StatBadge } from "../../components/stat-badge";
import { ThemedText } from "../../components/themed-text";
import { ThemedView } from "../../components/themed-view";

export default function AppHomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <ThemedText style={styles.title}>Ready to Twyst?</ThemedText>
            <View style={styles.badges}>
              <StatBadge icon="flame" value="12" />
              <StatBadge icon="sparkle" value="4,527" />
            </View>
          </View>

          <DailyGoalCard currentXP={35} goalXP={50} />

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Skill Trees</ThemedText>
            <View style={styles.skillGrid}>
              <SkillCard
                title="Calisthenics"
                progress={50}
                completed={12}
                total={24}
                color="#4A90E2"
              />
              <SkillCard
                title="Yoga & Flexibility"
                progress={40}
                completed={8}
                total={20}
                color="#9B59B6"
              />
              <SkillCard
                title="Strength Training"
                progress={17}
                completed={5}
                total={28}
                color="#E74C3C"
              />
              <SkillCard
                title="Cardio & HIIT"
                progress={16}
                completed={3}
                total={18}
                color="#F39C12"
              />
              <SkillCard
                title=""
                progress={0}
                completed={0}
                total={0}
                color="#27AE60"
                locked
              />
              <SkillCard
                title=""
                progress={0}
                completed={0}
                total={0}
                color="#1ABC9C"
                locked
              />
            </View>
          </View>
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
  },
  badges: {
    flexDirection: "row",
    gap: 8,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 16,
  },
  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});

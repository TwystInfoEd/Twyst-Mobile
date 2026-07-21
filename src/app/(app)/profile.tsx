import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { ProfileHeader } from "../../components/profile-header";
import { StatChip } from "../../components/stat-chip";
import { OverviewCard } from "../../components/overview-card";
import { ThemedText } from "../../components/themed-text";
import { ThemedView } from "../../components/themed-view";
import { useRouter } from "expo-router";

export default function ProfileScreen() {

    const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={{ zIndex: 1 }}>
        <ProfileHeader />
      </View>


      <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <View style={styles.body}>
            <ThemedText style={styles.name}>Twyst</ThemedText>
            <ThemedText style={styles.handle}>
              @ioana.chr9 · Joined June 2026
            </ThemedText>

            <ThemedText style={styles.bio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </ThemedText>

            <View style={styles.statsRow}>
              <View style={styles.chipsGroup}>
                <StatChip icon="barbell" label={null} variant="course" />
                <View style={styles.moreChip}>
                  <ThemedText style={styles.moreChipText}>+4</ThemedText>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.statCol}>
                <ThemedText style={styles.statNumber}>27</ThemedText>
                <ThemedText style={styles.statLabel}>Followers</ThemedText>
              </View>

              <View style={styles.divider} />

              <View style={styles.statCol}>
                <ThemedText style={styles.statNumber}>27</ThemedText>
                <ThemedText style={styles.statLabel}>Following</ThemedText>
              </View>
            </View>
            <ThemedText style={styles.coursesLabel}>Courses</ThemedText>

            <TouchableOpacity style={styles.addFriendsBtn} activeOpacity={0.8}>
              <ThemedText style={styles.addFriendsText}>
                + Add friends
              </ThemedText>
            </TouchableOpacity>

            <ThemedText style={styles.sectionTitle}>Overview</ThemedText>
              <View style={styles.overviewRow}>
                      <OverviewCard
                        icon="flame"
                        iconColor="#F5A623"
                        value="102"
                        label="Day streak"
                      />
                      <OverviewCard
                        icon="percent"
                        iconColor="#34C759"
                        value="89%"
                        label="Avg. accuracy"
                      />
                    </View>

                    <ThemedText style={styles.bandStatusTitle}>Band Status</ThemedText>

                    <TouchableOpacity
                      style={styles.bandStatusBtn}
                      activeOpacity={0.8}
                      onPress={() => router.push("/motion-studio")}
                    >
                      <ThemedText style={styles.bandStatusBtnText}>
                        See band status
                      </ThemedText>
                    </TouchableOpacity>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  safeArea: { flex: 1 },
  scrollView: { flex: 1 },
  body: { paddingHorizontal: 20, paddingTop: 20 },
  name: { fontSize: 26, fontWeight: "800", color: "#111111", marginBottom: 2 },
  handle: { fontSize: 14, color: "#8E8E93", marginBottom: 16 },
  bio: { fontSize: 15, color: "#3C3C43", lineHeight: 21, marginBottom: 18 },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  chipsGroup: { flexDirection: "row", alignItems: "center", gap: 8 },
  moreChip: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E2E5",
  },
  moreChipText: { fontSize: 13, fontWeight: "700", color: "#3C3C43" },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: "#E2E2E5",
    marginHorizontal: 18,
  },
  statCol: { alignItems: "flex-start" },
  statNumber: { fontSize: 17, fontWeight: "800", color: "#111111" },
  statLabel: { fontSize: 13, color: "#8E8E93" },
  coursesLabel: {
    fontSize: 13,
    color: "#8E8E93",
    marginBottom: 20,
  },
  addFriendsBtn: {
    borderWidth: 1,
    borderColor: "#E2E2E5",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 28,
  },
  addFriendsText: { fontSize: 15, fontWeight: "700", color: "#2F80ED" },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 12,
  },
  overviewRow: { flexDirection: "row", gap: 12 },

bandStatusBtn: {
  borderWidth: 1,
  borderColor: "#E2E2E5",
  borderRadius: 12,
  paddingVertical: 14,
  alignItems: "center",
  marginBottom: 28,
},
bandStatusBtnText: {
  fontSize: 15,
  fontWeight: "700",
  color: "#2F80ED",
},
bandStatusTitle: {
  fontSize: 22,
  fontWeight: "800",
  color: "#111111",
  marginTop: 28,
  marginBottom: 12,
},
});

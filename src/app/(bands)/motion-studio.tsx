import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { useMotionStatus } from "../../hooks/use-motion-status";
import { SegmentedToggle } from "../../components/segmented-toggle";
import { StatusSummaryBlock } from "../../components/status-summary-block";
import { BandRow } from "../../components/band-row";
import { ThemedText } from "../../components/themed-text";
import { ThemedView } from "../../components/themed-view";

const CONNECTION_COLOR = {
  connected: "#34C759",
  stale: "#F5A623",
  unknown: "#8E8E93",
  offline: "#E74C3C",
} as const;

export default function MotionStudioScreen() {
  const router = useRouter();
  const { data, loading, error, refetch } = useMotionStatus();
  const [mode, setMode] = useState<"single" | "dual">(
    data?.mode ?? "single"
  );

  const bandStatusColor = data?.mainBand
    ? CONNECTION_COLOR[data.mainBand.connection]
    : CONNECTION_COLOR.unknown;
  const bandStatusLabel = data?.mainBand
    ? data.mainBand.connection[0].toUpperCase() +
      data.mainBand.connection.slice(1)
    : "Unknown";

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={22} color="#111111" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.refreshBtn}
              onPress={refetch}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="refresh" size={15} color="#FFFFFF" />
                  <ThemedText style={styles.refreshText}>Refresh</ThemedText>
                </>
              )}
            </TouchableOpacity>
          </View>

          <ThemedText style={styles.title}>Motion dashboard</ThemedText>
          <ThemedText style={styles.subtitle}>
            Record a reference motion, stream incoming frames, and compare
            each repetition in real time.
          </ThemedText>

          <View style={styles.toggleRow}>
            <SegmentedToggle
              value={mode}
              onChange={setMode}
              options={[
                { label: "Single-Band", value: "single" },
                { label: "Dual-Band", value: "dual" },
              ]}
            />
          </View>

          {error && (
            <View style={styles.errorBanner}>
              <Ionicons name="alert-circle" size={16} color="#E74C3C" />
              <ThemedText style={styles.errorText}>{error}</ThemedText>
            </View>
          )}

          <View style={styles.summaryRow}>
            <StatusSummaryBlock
              label="Session status"
              value={
                data
                  ? data.sessionState[0].toUpperCase() +
                    data.sessionState.slice(1)
                  : "Idle"
              }
              footnote={data ? "Ready to start" : "Waiting for data…"}
            />
            <StatusSummaryBlock
              label="Stream counts"
              value={`${data?.frameCount ?? 0} frames`}
              footnote={`${data?.repCount ?? 0} reps tracked so far`}
            />
            <StatusSummaryBlock
              label="Reference motion"
              value={data?.referenceMotionName ?? "none"}
              footnote={
                data?.referenceMotionName ? "Reference loaded" : "No reference"
              }
            />
          </View>

          <View style={styles.bandSection}>
            <View style={styles.bandSectionHeader}>
              <View>
                <ThemedText style={styles.bandTitle}>Band status</ThemedText>
                <ThemedText style={styles.bandSubtitle}>
                  Connection health for the two bands and bridge state.
                </ThemedText>
              </View>
              <View
                style={[
                  styles.statusPill,
                  { backgroundColor: bandStatusColor + "22" },
                ]}
              >
                <ThemedText
                  style={[styles.statusPillText, { color: bandStatusColor }]}
                >
                  {bandStatusLabel}
                </ThemedText>
              </View>
            </View>

            <View style={styles.bandRow}>
              <BandRow
                name="Main band"
                connection={data?.mainBand?.connection ?? "unknown"}
                battery={data?.mainBand?.battery}
              />
              {mode === "dual" && (
                <BandRow
                  name="Secondary band"
                  connection={data?.secondaryBand?.connection ?? "unknown"}
                  battery={data?.secondaryBand?.battery}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  safeArea: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 8,
    marginBottom: 12,
  },
  backBtn: { padding: 4 },
  refreshBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#2F80ED",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
  },
  refreshText: { color: "#FFFFFF", fontSize: 13, fontWeight: "700" },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#2F80ED",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  badgeText: { color: "#FFFFFF", fontSize: 12, fontWeight: "700" },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111111",
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#8E8E93",
    paddingHorizontal: 20,
    lineHeight: 20,
    marginBottom: 18,
  },
  toggleRow: { paddingHorizontal: 20, marginBottom: 20 },
  errorBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#FDEDEC",
  },
  errorText: { color: "#E74C3C", fontSize: 13, flex: 1 },
  summaryRow: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  bandSection: { paddingHorizontal: 20 },
  bandSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  bandTitle: { fontSize: 18, fontWeight: "800", color: "#111111", marginBottom: 4 },
  bandSubtitle: { fontSize: 13, color: "#8E8E93", maxWidth: 240 },
  statusPill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 14 },
  statusPillText: { fontSize: 12, fontWeight: "700" },
  bandRow: { flexDirection: "row", gap: 12 },
});
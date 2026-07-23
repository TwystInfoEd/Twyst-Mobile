import { useCallback, useEffect, useRef, useState } from "react";
import { fetchJson } from "../api/api";

type Connection = "connected" | "stale" | "unknown" | "offline";

interface BandInfo {
  connection: Connection;
  battery?: number;
}

interface MotionStatus {
  mainBand: BandInfo;
  secondaryBand: BandInfo;
  sessionState: "idle" | "recording" | "comparing";
  mode: "single" | "dual";
  frameCount: number;
  repCount: number;
  referenceMotionName: string | null;
}

interface LinkStatusResponse {
  secondary_connected: boolean;
  main_connected: boolean;
  state: string;
  stale: boolean;
  last_update: number | null;
}

interface RecordStateResponse {
  active: boolean;
  motion_name: string | null;
  mode: "single" | "dual";
  frames_count: number;
  reps_detected: number;
}

interface CompareStateResponse {
  active: boolean;
  reference_name: string | null;
  mode: "single" | "dual";
  frames_count: number;
  reps_detected: number;
}

const POLL_INTERVAL_MS = 1500;

function connectionFrom(connected: boolean, stale: boolean): Connection {
  if (stale) return "stale";
  return connected ? "connected" : "offline";
}

export function useMotionStatus() {
  const [data, setData] = useState<MotionStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    try {
      const [link, recordState, compareState, modeResp] = await Promise.all([
        fetchJson<LinkStatusResponse>("/link/status"),
        fetchJson<RecordStateResponse>("/record/state"),
        fetchJson<CompareStateResponse>("/compare/state"),
        fetchJson<{ mode: "single" | "dual" }>("/mode/current"),
      ]);

      const sessionState: MotionStatus["sessionState"] = compareState.active
        ? "comparing"
        : recordState.active
        ? "recording"
        : "idle";

      const activeMode = compareState.active
        ? compareState.mode
        : recordState.active
        ? recordState.mode
        : modeResp.mode;

      setData({
        mainBand: { connection: connectionFrom(link.main_connected, link.stale) },
        secondaryBand: { connection: connectionFrom(link.secondary_connected, link.stale) },
        sessionState,
        mode: activeMode,
        frameCount: compareState.active
          ? compareState.frames_count
          : recordState.active
          ? recordState.frames_count
          : 0,
        repCount: compareState.active
          ? compareState.reps_detected
          : recordState.active
          ? recordState.reps_detected
          : 0,
        referenceMotionName: compareState.active
          ? compareState.reference_name
          : recordState.active
          ? recordState.motion_name
          : null,
      });
      setError(null);
    } catch (e: any) {
      setError(e.message ?? "Failed to reach backend");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
    intervalRef.current = setInterval(refetch, POLL_INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [refetch]);

  return { data, loading, error, refetch };
}
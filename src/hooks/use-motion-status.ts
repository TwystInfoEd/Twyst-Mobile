import { useCallback, useEffect, useRef, useState } from "react";

const API_BASE = process.env.EXPO_PUBLIC_API_URL ?? "https://your-api.example.com";

export type BandConnection = "connected" | "stale" | "unknown" | "offline";

export interface BandInfo {
  name: string;
  connection: BandConnection;
  battery?: string;
}

export interface MotionStatus {
  sessionState: "idle" | "recording" | "comparing";
  frameCount: number;
  repCount: number;
  referenceMotionName: string | null;
  mode: "single" | "dual";
  mainBand: BandInfo;
  secondaryBand: BandInfo | null;
}

export function useMotionStatus(pollMs = 5000) {
  const [data, setData] = useState<MotionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/motion/status`);
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json: MotionStatus = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load status");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    intervalRef.current = setInterval(fetchStatus, pollMs);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [fetchStatus, pollMs]);

  return { data, loading, error, refetch: fetchStatus };
}
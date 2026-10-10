import { useCallback, useEffect, useState } from "react";
import { getAllProjects } from "@/services/projectService";
import type { Project } from "@/types/Project";

// The API runs on a free Render instance that can take a while to wake up.
const SLOW_REQUEST_MS = 4000;

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSlow, setIsSlow] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const slowTimer = window.setTimeout(() => {
      if (!cancelled) setIsSlow(true);
    }, SLOW_REQUEST_MS);

    getAllProjects()
      .then((data) => {
        if (!cancelled) setProjects(data);
      })
      .catch(() => {
        if (!cancelled) {
          setError("We couldn't load the projects right now.");
        }
      })
      .finally(() => {
        window.clearTimeout(slowTimer);
        if (!cancelled) {
          setLoading(false);
          setIsSlow(false);
        }
      });

    return () => {
      cancelled = true;
      window.clearTimeout(slowTimer);
    };
  }, [attempt]);

  const retry = useCallback(() => {
    setError(null);
    setLoading(true);
    setAttempt((value) => value + 1);
  }, []);

  return { projects, loading, isSlow, error, retry };
};

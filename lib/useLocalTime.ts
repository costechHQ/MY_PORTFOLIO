import { useEffect, useState } from "react";

/**
 * Current time in a given IANA time zone, e.g. "10:24 AM".
 * Returns "" until mounted so server and client markup match.
 */
export function useLocalTime(timeZone: string): string {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone,
      }).format(new Date());

    const first = setTimeout(() => setTime(format()), 0);
    const id = setInterval(() => setTime(format()), 30_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [timeZone]);

  return time;
}

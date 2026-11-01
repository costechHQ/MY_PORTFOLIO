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

    setTime(format());
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}

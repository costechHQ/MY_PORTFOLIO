import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const config = { runtime: "edge" };

const NAME = "Christopher Onyedika Simon";
const ROLE = "Full-Stack Software Engineer";

/** 1200x630 Open Graph image, e.g. /api/og?title=PIKVA */
export default function handler(req: NextRequest) {
  const raw = new URL(req.url).searchParams.get("title") ?? NAME;
  const title = raw.slice(0, 80);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#fff",
          background:
            "radial-gradient(ellipse at 80% 0%, #2f6bff 0%, #0b2a8a 38%, #02040a 78%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, opacity: 0.7 }}>{`• ${ROLE}`}</div>
        <div style={{ display: "flex", fontSize: 84, lineHeight: 1.05, letterSpacing: -2 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 30, opacity: 0.8 }}>
          {title === NAME ? "Web & mobile apps, end to end" : NAME}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
